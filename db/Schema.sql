DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

-- CREATES TABLE *employees* - FOREIGN KEY = position  
CREATE TABLE employees (
  employee_id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  department VARCHAR(30),
  position VARCHAR(30),
  PRIMARY KEY (employee_id)
)

-- CREATES TABLE *roles* - FOREIGN KEY = position 
CREATE TABLE roles (
 department INT(30),
 position VARCHAR(30),
 salary DECIMAL(10,2),
 PRIMARY KEY (department_id)
)

-- SHOW tables in database
SELECT * FROM employees; 
SELECT * FROM roles;
SHOW TABLES;
