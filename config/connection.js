const mysql = require('mysql');

const connection = mysql.createConnection({
    database: 'burgers_db',
    host: 'localhost',
    password: 'princess20',
    port: 3306,
    user: 'root',
});

connection.connect(error => {
    if (error) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
