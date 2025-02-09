const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

// Connect to SQLite database and create user table if it doesn't exist
async function connectDB() {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        )
    `);

    return db;
}

module.exports = connectDB;
