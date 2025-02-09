const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const path = require('path');

async function connectDB() {
    return sqlite.open({
        filename: path.join(__dirname, '..', 'db', 'database.sqlite'),
        driver: sqlite3.Database
    });
}

module.exports = connectDB;
