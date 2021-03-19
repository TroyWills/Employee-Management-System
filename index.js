const connection = require("./db/connection");
const inquirer = require("inquirer");
const db = require("./db/index");

getPrompts();

async function getPrompts() {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "what would you like to do?",
      choices: [
        {
          name: "view all employees",
          value: "VIEW ALL"
        },
        {
          name: "Add new employee",
          value: "ADD EMPLOYEE"
        }
      ]
    }
  ]);

  // Call function based on user response 
  if ( { choice } === "VIEW ALL") {
    return viewAllEmployees();
  }
}

async function viewAllEmployees() {
  // const employees = await db.readAllEmployees();
  // console.log(employees);
  db.readAllEmployees();
}

// class Database {
//   constructor(connection) {
//     this.connection = connection;
// }

//   function addEmployee(first_name, last_name, department, title) {
//     return connection.query("INSERT INTO employees (first_name, last_name, department, title) VALUES (?, ?, ?, ?);", [first_name, last_name, department, title])
//   }

//   function addRole(department, position, salary) {
//     return connection.query("INSERT INTO roles (department, position, salary) VALUES (?, ?, ?);", [department, position, salary])
//   }

    // function readAllEmployees() {
    //   return connection.query("SELECT * FROM employees");
    // }

//   function viewAllRoles() {
//     return connection.query("SELECT * FROM roles")
//   }
// }

module.exports = new Database(connection);