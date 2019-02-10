const mysql = require('mysql');
require('dotenv').config({ silent: true });

let connection;

if (process.env.MYSQL_DSN) {
    connection = mysql.createConnection(process.env.MYSQL_DSN);
} else {
    connection = mysql.createConnection({
        database: 'burgers_db',
        host: 'localhost',
        password: process.env.MYSQL_PASSWORD,
        user: process.env.MYSQL_USER,
    });
}

connection.connect(error => {
    if (error) {
        console.error(`error connecting: ${error.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
