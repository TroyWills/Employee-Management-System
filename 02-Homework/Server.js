var mysql = require("mysql"); 
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "Employees"
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  inquirer
  .prompt([
      {
        name: "employee_name",
        type: "input",
        message: "What is the employees name?",
      },
    /* Pass your questions in here */
  ]);
  .then(answers => {
      console.log("Employees " + answers.employee_name);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
