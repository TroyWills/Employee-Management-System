var inquirer = require('inquirer');
const connection = require("../db/connection");

// PROMPT to add a new employee
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
      name: "title",
      type: "input",
      message: "What position for new employee?",
    },
  ]) 
  .then((answer) => {
    // DISPLAY message upon prompt finishing 
    console.log("Welcome New Employee " + answer.first_name, answer.last_name);
    console.log("Department: " + answer.department);
    console.log("Title: " + answer.title);
  });

