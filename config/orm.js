
var connection = require("./connection.js");

let orm = {
    selectAll: function(cb) {
        let query = 'SELECT * FROM burgers';
        connection.query(query, function(error, result) {
            if (error) throw error;
            cb(result);
        })
    },
    insertOne: function(burger_name, cb) {
        let query = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, false)';
        connection.query(query, burger_name, function(error, result) {
            if (error) throw error;
            cb(result);
        })
    },
    updateOne: function(devoured, id, cb) {
        let query = 'UPDATE burgers SET devoured=true WHERE id= ' + id;
        connection.query(query, function(error, result) {
            if (error) throw error;
            cb(result);
        })
    },
}


module.exports = orm;
