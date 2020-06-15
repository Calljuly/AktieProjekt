const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('../../Data/testDb.db');

module.exports = db;