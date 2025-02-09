const connectDB = require('../../../sql-lite-schema/db');
const { generateToken } = require('../../../utils/auth');
const { logEvent, EventTypes, EventClasses, EventResults } = require('../../../utils/logger');
const { captchas } = require('../queries');

const dbPromise = connectDB();

const registerMutation = {
    register: async (_, { input }, context) => {
        const { username, email, password, captchaId, captchaAnswer } = input;
        const ipAddress = context.req?.ip || context.req?.headers['x-forwarded-for'] || null;
        
        // Verify captcha
        const captcha = captchas.get(captchaId);
        if (!captcha || captcha.text.toUpperCase() !== captchaAnswer.toUpperCase()) {
            throw new Error('Captcha expired or invalid');
        }
        
        captchas.delete(captchaId);

        try {
            const db = await dbPromise;
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
            
            const user = { id: result.lastID, username, email };

            await logEvent(
                EventTypes.USER,
                EventClasses.REGISTER,
                EventResults.SUCCESS,
                `New user registered: ${username}`,
                result.lastID,
                ipAddress
            );

            return { token: generateToken(user), user };
        } catch (error) {
            if (error.message.includes('UNIQUE constraint failed: users.username')) {
                throw new Error('This username is already taken');
            }
            throw error;
        }
    }
};

module.exports = registerMutation;
