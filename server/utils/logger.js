const connectDB = require('../sql-lite-schema/db');

const EventTypes = {
    SYSTEM: 'System',
    USER: 'User'
};

const EventClasses = {
    LOGIN: 'Login',
    REGISTER: 'Register',
    LOGOUT: 'Logout',
    ERROR: 'Error',
    AUTH: 'Authentication'
};

const EventResults = {
    SUCCESS: 'Success',
    FAILED: 'Failed',
    ERROR: 'Error'
};

async function logEvent(eventType, eventClass, result, message, userId = null, ipAddress = null) {
    try {
        const db = await connectDB();
        await db.run(
            'INSERT INTO logs (event_type, event_class, event_result, event_message, user_id, ip_address) VALUES (?, ?, ?, ?, ?, ?)',
            [eventType, eventClass, result, message, userId, ipAddress]
        );
    } catch (error) {
        console.error('Logging failed:', error);
    }
}

module.exports = {
    EventTypes,
    EventClasses,
    EventResults,
    logEvent
};
