const mysql = require('mysql');
const db = mysql.createConnection({
    host: '3.19.255.197',
    user: 'team01',
    password: 'password',
    database: 'aardvark_db'
})

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database!');
})

module.exports = db;