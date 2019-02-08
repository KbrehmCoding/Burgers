const mysql = require('mysql');
require("dotenv").config();

const connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'burgers_db',
});

connection.connect(error => {
    if (error) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
