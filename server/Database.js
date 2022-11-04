const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DanZeAh12!',
    database: 'webgamedb'
})