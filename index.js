const employees = require("./employees");

findAllEmployees() {
    return this.connection.query(
      "SELECT employees.id, employees.first_name, employees.last_name, employees.title"
    );
  }

