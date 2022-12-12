const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my_db'
});

db.connect();

db.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err

    if (rows[0].solution == 2)
        console.log('Database loaded')
})

module.exports = db;

