const connectDB = require('../../../sql-lite-schema/db');

const dbPromise = connectDB();

const logsQuery = {
    logs: async (_, { limit = 100, offset = 0 }) => {
        const db = await dbPromise;
        return db.all(
            'SELECT * FROM logs ORDER BY created_at DESC LIMIT ? OFFSET ?',
            [limit, offset]
        );
    }
};

module.exports = logsQuery;
