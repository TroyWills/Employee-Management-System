const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // Method to find all employees 
    readAllEmployees() {
        // return this.connection.query("SELECT * FROM employees");
        console.log("are we here")
      }
};

module.exports = new DB(connection);