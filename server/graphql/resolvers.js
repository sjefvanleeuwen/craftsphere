const connectDB = require('../sql-lite-schema/db');
const { generateCaptcha } = require('../utils/captcha');
const crypto = require('crypto');
const fetch = require('node-fetch');
const { generateToken } = require('../utils/auth');
const { logEvent, EventTypes, EventClasses, EventResults } = require('../utils/logger');

const RECAPTCHA_SECRET_KEY = 'YOUR_SECRET_KEY_HERE';

const captchas = new Map();

const dbPromise = connectDB();

const resolvers = {
    Query: {
        message: () => 'Welcome to Craft Sphere!',
        users: async () => {
            const db = await dbPromise;
            return db.all('SELECT id, username, email FROM users');
        },
        generateCaptcha: () => {
            const id = crypto.randomBytes(16).toString('hex');
            const { text, image } = generateCaptcha();
            
            captchas.set(id, {
                text,
                timestamp: Date.now()
            });

            // Clean up old captchas
            const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
            for (const [key, value] of captchas.entries()) {
                if (value.timestamp < fiveMinutesAgo) {
                    captchas.delete(key);
                }
            }

            return { id, image };
        },
        logs: async (_, { limit = 100, offset = 0 }) => {
            const db = await dbPromise;
            return db.all(
                'SELECT * FROM logs ORDER BY created_at DESC LIMIT ? OFFSET ?',
                [limit, offset]
            );
        }
    },
    Mutation: {
        register: async (_, { input }, context) => {
            const { username, email, password, captchaId, captchaAnswer } = input;
            const ipAddress = context.req?.ip || context.req?.headers['x-forwarded-for'] || null;
            
            // Verify captcha
            const captcha = captchas.get(captchaId);
            console.log('Captcha validation:', {
                stored: captcha?.text,
                provided: captchaAnswer,
                id: captchaId
            });

            if (!captcha) {
                throw new Error('Captcha expired or invalid');
            }

            if (captcha.text.toUpperCase() !== captchaAnswer.toUpperCase()) {
                throw new Error('Invalid captcha code');
            }
            
            // Remove used captcha
            captchas.delete(captchaId);

            try {
                const db = await dbPromise;
                
                // Check if email exists first
                const existingUser = await db.get('SELECT email FROM users WHERE email = ?', [email]);
                if (existingUser) {
                    await logEvent(
                        EventTypes.USER,
                        EventClasses.REGISTER,
                        EventResults.FAILED,
                        `Registration failed: Email ${email} already exists`,
                        null,
                        ipAddress
                    );
                    throw new Error('This email address is already registered');
                }

                const result = await db.run(
                    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                    [username, email, password]
                );
                
                const user = {
                    id: result.lastID,
                    username,
                    email
                };

                await logEvent(
                    EventTypes.USER,
                    EventClasses.REGISTER,
                    EventResults.SUCCESS,
                    `New user registered: ${username}`,
                    result.lastID,
                    ipAddress
                );

                return {
                    token: generateToken(user),
                    user
                };
            } catch (error) {
                // Check if it's a SQLite unique constraint error
                if (error.message.includes('UNIQUE constraint failed: users.username')) {
                    throw new Error('This username is already taken');
                }
                throw new Error(error.message);
            }
        },
        login: async (_, { input }, { res }) => {
            const { username, password } = input;
            const ipAddress = context.req?.ip || context.req?.headers['x-forwarded-for'] || null;

            try {
                const db = await dbPromise;
                const user = await db.get(
                    'SELECT * FROM users WHERE username = ? AND password = ?',
                    [username, password]
                );

                if (!user) {
                    await logEvent(
                        EventTypes.USER,
                        EventClasses.LOGIN,
                        EventResults.FAILED,
                        `Login failed for user ${username}: Invalid credentials`,
                        null,
                        ipAddress
                    );
                    throw new Error('Invalid username or password');
                }

                const token = generateToken(user);

                // Set HTTP-only cookie
                res.cookie('auth_token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 24 * 60 * 60 * 1000, // 24 hours
                    sameSite: 'strict'
                });

                const result = {
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        email: user.email
                    }
                };

                await logEvent(
                    EventTypes.USER,
                    EventClasses.LOGIN,
                    EventResults.SUCCESS,
                    `User ${username} logged in successfully`,
                    user.id,
                    ipAddress
                );

                return result;
            } catch (error) {
                if (error.message === 'Invalid username or password') {
                    throw error;
                }
                
                await logEvent(
                    EventTypes.SYSTEM,
                    EventClasses.LOGIN,
                    EventResults.ERROR,
                    `System error during login for ${username}: ${error.message}`
                );
                throw new Error('Login failed due to system error');
            }
        }
    }
};

module.exports = resolvers;
