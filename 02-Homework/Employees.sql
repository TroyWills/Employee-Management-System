DROP DATABASE IF EXISTS Employees;
CREATE DATABASE Employees;
USE Employees;
SHOW TABLES;


-- CREATES TABLE *Employees* 
CREATE TABLE Employees (
  ID INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (ID)
)


-- CREATES TABLE *roles*
CREATE TABLE roles (
 department_id INT AUTO_INCREMENT NOT NULL,
 title VARCHAR(30),
 salary DECIMAL(8,2),
 PRIMARY KEY (department_id)
)


-- SHOW tables in database
SELECT * FROM employees; 
SELECT * FROM roles;
