const connectDB = require('../../../sql-lite-schema/db');

const dbPromise = connectDB();

const usersQuery = {
    users: async () => {
        const db = await dbPromise;
        return db.all('SELECT id, username, email FROM users');
    }
};

module.exports = usersQuery;
