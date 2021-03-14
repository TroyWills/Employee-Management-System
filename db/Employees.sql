DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

-- CREATES TABLE *Employees* 
CREATE TABLE employees (
  ID INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  title VARCHAR(30),
  PRIMARY KEY (ID)
)

-- CREATES TABLE *roles*
DROP TABLE roles
CREATE TABLE roles (
 department_id INT AUTO_INCREMENT NOT NULL,
 title VARCHAR(30),
 salary INT,
 PRIMARY KEY (department_id)
)

-- SHOW tables in database
SELECT * FROM employees; 
SELECT * FROM roles;
SHOW TABLES;