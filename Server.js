// dependencies 
var mysql = require("mysql"); 
var inquirer = require("inquirer");

// initialize the connection to workbench
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "Employees"
});

// view status of connection in console.log
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });   

module.exports = employees;