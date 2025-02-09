const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');
const fs = require('fs');

async function initializeDatabase() {
    const dbDir = path.join(__dirname, 'db');
    const dbPath = path.join(dbDir, 'database.sqlite');

    // Ensure database directory exists
    if (!fs.existsSync(dbDir)) {
        fs.mkdirSync(dbDir, { recursive: true });
    }

    try {
        const db = await sqlite.open({
            filename: dbPath,
            driver: sqlite3.Database
        });

        // Check if users table exists, if not create it
        await db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create logs table
        await db.exec(`
            CREATE TABLE IF NOT EXISTS logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                event_type TEXT NOT NULL,     -- 'System' or 'User'
                event_class TEXT NOT NULL,    -- 'Login', 'Register', etc.
                event_result TEXT NOT NULL,   -- 'Success', 'Failed', 'Error'
                event_message TEXT NOT NULL,
                user_id INTEGER,
                ip_address TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )
        `);

        // Check if there are any users
        const userCount = await db.get('SELECT COUNT(*) as count FROM users');
        
        if (userCount.count === 0) {
            console.log('Creating demo user...');
            await db.run(
                'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                ['demo', 'demo@demo.com', 'demo']
            );
            console.log('Demo user created successfully');
        }

        await db.close();
        console.log('Database initialization completed successfully');
        return true;
    } catch (error) {
        console.error('Database initialization failed:', error);
        throw error;
    }
}

// Run if called directly
if (require.main === module) {
    initializeDatabase().catch(console.error);
}

module.exports = initializeDatabase;
