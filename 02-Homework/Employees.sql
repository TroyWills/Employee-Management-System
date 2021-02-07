DROP DATABASE IF EXISTS Employees;

CREATE DATABASE Employees;

USE Employees;


-- CREATE TABLE *Employees* 
CREATE TABLE Employees (
  ID INTEGER(7) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER(7),
  manager_id INTEGER(7),
  PRIMARY KEY (ID)
)

-- CREATE TABLE *Role*
ID INTEGER(7) 


-- CREATE TABLE *role*
--id - INT PRIMARY KEY - NOT NULL
--title - VARCHAR(30) to hold role title
--salary - DECIMAL to hold role salary
--department_id - INT to hold reference to department role belongs to


-- CREATE TABLE *department*
--id - INT PRIMARY KEY - NOT NULL
--name - VARCHAR(30) to hold department name