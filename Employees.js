var inquirer = require('inquirer');
const cTable = require('console.table');

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
        name: "title",
        type: "list",
        message: "What position for new employee?",
        choices: ["Owner", "Sales", "Marketing", "Human Resources", "Operations", "Engineer"],
    },
  ])
  .then((answer) => {
    console.log("Welcome New Employee " + answer.first_name, answer.last_name);
    console.log("Title: " + answer.title)
  });

