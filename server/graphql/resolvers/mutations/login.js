const connectDB = require('../../../sql-lite-schema/db');
const { generateToken } = require('../../../utils/auth');
const { logEvent, EventTypes, EventClasses, EventResults } = require('../../../utils/logger');

const dbPromise = connectDB();

const loginMutation = {
    login: async (_, { input }, context) => {
        const { username, password } = input;
        const ipAddress = context.req?.ip || context.req?.headers['x-forwarded-for'] || null;

        try {
            const db = await dbPromise;
            const user = await db.get('SELECT * FROM users WHERE username = ?', [username]);

            if (!user || user.password !== password) {
                await logEvent(
                    EventTypes.USER,
                    EventClasses.LOGIN,
                    EventResults.FAILED,
                    `Login failed: ${user ? 'Invalid password' : 'User not found'} for ${username}`,
                    user?.id || null,
                    ipAddress
                );
                throw new Error('Invalid username or password');
            }

            const token = generateToken(user);

            if (context.res) {
                context.res.cookie('auth_token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 24 * 60 * 60 * 1000,
                    sameSite: 'strict'
                });
            }

            await logEvent(
                EventTypes.USER,
                EventClasses.LOGIN,
                EventResults.SUCCESS,
                `User ${username} logged in successfully`,
                user.id,
                ipAddress
            );

            return {
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
            };
        } catch (error) {
            if (error.message === 'Invalid username or password') throw error;
            
            await logEvent(
                EventTypes.SYSTEM,
                EventClasses.LOGIN,
                EventResults.ERROR,
                `System error during login for ${username}: ${error.message}`
            );
            throw new Error('Login failed due to system error');
        }
    }
};

module.exports = loginMutation;
