const connection = require("./db/connection");
const inquirer = require("inquirer");
const db = require("./db/index");
require("console.table");

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
        },
        {
          name: "Exit",
          value: "EXIT"
        },
      ]
    }
  ]);

  // Call function based on user response 
switch (choice) {
  case "VIEW ALL": 
  return viewAllEmployees();

  case "ADD EMPLOYEE": 
  return addEmployee();

  default: 
  return exit();
  }
}

async function viewAllEmployees() {
  const employees = await db.readAllEmployees();
  console.table(employees);
  getPrompts();
}

async function addEmployee() {
  inquirer
  .prompt([
    {
        name: "first_name",
        type: "input",
        message: "What is new employees first name?",
    },
    {
        name: "last_name",
        type: "input",
        message: "What is new employees last name?",
    },
    {
      name: "department",
      type: "list",
      message: "What department will the new employee work in?",
      choices: ["Owner", "Sales", "Human Resources", "Operations", "Engineer"],
    },
    {
      name: "position",
      type: "input",
      message: "What position for new employee?",
    },
  ]) 
  .then(async(answer) => {
    // DISPLAY message upon prompt finishing 
    console.log("Welcome New Employee " + answer.first_name, answer.last_name);
    console.log("Department: " + answer.department);
    console.log("Position: " + answer.position);
    const addEmployee = await db.addEmployee(answer.first_name, answer.last_name, answer.department, answer.position);
    if (addEmployee) {
      viewAllEmployees();
    }
      getPrompts();
  });
}

function exit() {
  console.log("Goodbye!");
  process.exit();
}