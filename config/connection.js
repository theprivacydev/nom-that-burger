const mysql = require('mysql');
require('dotenv').config();
let connection;

// Defines mysql connection and database we'll be working with
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
    connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.password,
    database: 'nom_burgers_db'
});

// Makes connection with the mysql database
connection.connect((err)=> {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;