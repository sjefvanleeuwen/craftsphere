const connectDB = require('../sql-lite-schema/db');
const { generateCaptcha } = require('../utils/captcha');
const crypto = require('crypto');
const fetch = require('node-fetch');

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
        }
    },
    Mutation: {
        register: async (_, { input }) => {
            const { username, email, password, captchaId, captchaAnswer } = input;
            
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
                const result = await db.run(
                    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                    [username, email, password]
                );
                
                const user = {
                    id: result.lastID,
                    username,
                    email
                };

                return {
                    token: 'dummy-token-' + result.lastID, // Replace with proper JWT
                    user
                };
            } catch (error) {
                throw new Error('Registration failed: ' + error.message);
            }
        }
    }
};

module.exports = resolvers;
