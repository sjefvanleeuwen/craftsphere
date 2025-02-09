const { generateCaptcha } = require('../../../utils/captcha');
const crypto = require('crypto');

const captchas = new Map();

const captchaQuery = {
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
};

module.exports = { captchaQuery, captchas };
