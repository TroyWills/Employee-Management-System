const connection = require("./connection");

class Database {
    constructor(connection) {
        this.connection = connection;
    }

    addEmployee(first_name, last_name, department, position) {
        return this.connection.query("INSERT INTO employees (first_name, last_name, department, position) VALUES (?, ?, ?, ?);", [first_name, last_name, department, position])
    }

    addRole(department, position, salary) {
        return this.connection.query("INSERT INTO roles (department, position, salary) VALUES (?, ?, ?);", [department, position, salary])
    }

    readAllEmployees() {
        return this.connection.query("SELECT * FROM employees");
    }

    readAllRoles() {
        return this.connection.query("SELECT * FROM roles")
    }
}

module.exports = new Database(connection);