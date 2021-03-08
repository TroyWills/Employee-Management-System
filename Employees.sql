DROP DATABASE IF EXISTS Employees;
CREATE DATABASE Employees;
USE Employees;

-- CREATES TABLE *Employees* 
CREATE TABLE Employees (
  ID INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  title VARCHAR(30),
  PRIMARY KEY (ID)
)

-- INSERTED data into employees table
INSERT INTO employees (first_name, last_name, title) values 
("Troy", "Wills", "Owner"),
("Sarah", "Rinehart", "Marketing"),
("Rizzo", "Wills", "Sales"),
("Bella", "Wills", "Sales"),
("Tom", "Brady", "Operations"),
("Patrick", "Mahomes", "Operations"),
("Mitchell", "Trubisky", "Operations"),
("Kris", "Bryant", "Engineer"),
("Javier", "Baez", "Engineer"),
("Roger", "Goodell", "Human Resources"); 
-- CREATES TABLE *roles*
DROP TABLE roles
CREATE TABLE roles (
 department_id INT AUTO_INCREMENT NOT NULL,
 title VARCHAR(30),
 salary INT,
 PRIMARY KEY (department_id)
)

-- INSERTED DATA INTO roles table

INSERT INTO roles (title, salary) values 
("Owner", 1000000),
("Sales", 750000),
("Marketing", 100000),
("Human_Resources", 75000),
("Operations", 1500000),
("Engineer", 500000);

-- SHOW tables in database
SELECT * FROM employees; 
SELECT * FROM roles;
SHOW TABLES;