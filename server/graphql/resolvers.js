const connectDB = require('../sql-lite-schema/db');

const dbPromise = connectDB();

const resolvers = {
    Query: {
        message: () => 'Welcome to Craft Sphere!',
        users: async () => {
            const db = await dbPromise;
            return db.all('SELECT id, username, email FROM users');
        }
    },
    Mutation: {
        register: async (_, { input }) => {
            const { username, email, password } = input;
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
