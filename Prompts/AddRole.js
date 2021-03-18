var inquirer = require('inquirer');

// PROMPT to add a new role
inquirer
  .prompt([
    {
        name: "department",
        type: "list",
        message: "What department would you like to add a position too?",
        choices: ["Owner", "Sales", "Human Resources", "Operations", "Engineer"],
    },
    {
        name: "position",
        type: "input",
        message: "What is the new job title being added?",
    },
    {
        name: "salary",
        type: "input",
        message: "Salary of new position?",
        choices: ["Owner", "Sales", "Marketing", "Human Resources", "Operations", "Engineer"],
    },
  ])
  .then((answer) => {
    console.log(answer.position + " has been added to " + answer.department + " with a salary of " + "$"+ answer.salary);
  });

