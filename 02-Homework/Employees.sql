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
INSERT INTO employees (first_name, last_name, title) values ("Troy", "Wills", "Owner")
INSERT INTO employees (first_name, last_name, title) values ("Sarah", "Rinehart", "Marketing")
INSERT INTO employees (first_name, last_name, title) values ("Rizzo", "Wills", "Sales")
INSERT INTO employees (first_name, last_name, title) values ("Bella", "Wills", "Sales")
INSERT INTO employees (first_name, last_name, title) values ("Tom", "Brady", "Operations")
INSERT INTO employees (first_name, last_name, title) values ("Patrick", "Mahomes", "Operations")
INSERT INTO employees (first_name, last_name, title) values ("Mitchell", "Trubisky", "Operations")
INSERT INTO employees (first_name, last_name, title) values ("Kris", "Bryant", "Engineer")
INSERT INTO employees (first_name, last_name, title) values ("Javier", "Baez", "Engineer")
INSERT INTO employees (first_name, last_name, title) values ("Roger", "Goodell", "Human Resources") 


-- CREATES TABLE *roles*
DROP TABLE roles
CREATE TABLE roles (
 department_id INT AUTO_INCREMENT NOT NULL,
 title VARCHAR(30),
 salary INT,
 PRIMARY KEY (department_id)
)

-- INSERTED DATA INTO roles table
INSERT INTO roles (title, salary) values ("Owner", 1000000)
INSERT INTO roles (title, salary) values ("Sales", 750000)
INSERT INTO roles (title, salary) values ("Marketing", 100000)
INSERT INTO roles (title, salary) values ("Human_Resources", 75000)
INSERT INTO roles (title, salary) values ("Operations", 1500000)
INSERT INTO roles (title, salary) values ("Engineer", 500000)

-- SHOW tables in database
SELECT * FROM employees; 
SELECT * FROM roles;
SHOW TABLES;