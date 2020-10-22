-- Double dashes are for single line comments
/* 
  This is used to create multi-line comments
*/
-- ALTER TABLE STATEMENT
-- used to change something in a table

-- ALTER TABLE cars ADD COLUMN fuel_type VARCHAR(50);
-- ALTER TABLE cars DROP COLUMN fuel_type;

-- CRUD --
-- CREATE READ UPDATE DESTROY
-- These are the 4 basic actions you can do to any record of a table

-- CREATE

-- INSERT INTO

INSERT INTO students
  (last_name, first_name, email, phone_number)
  VALUES
  ('Kbeili', 'Tam', 'tam@codecore.com', '778-890-9939');


-- READ

-- SELECT

-- get all columns of all records from the students table
SELECT * FROM students; 

-- get only the id and first_name of all records from the students table;
SELECT id, first_name FROM students;

-- WHERE (clause)
-- used to filter results

SELECT * FROM students WHERE id = 1;

-- SQL has many operators that work similar to JS operators
-- =	equals
-- !=	not equal
-- >	greater than
-- <	less than
-- >=	greater or equal
-- <=	less or equal

-- Select all students whose ids are grater than 100
SELECT * FROM students WHERE id > 100;

SELECT * FROM students WHERE age > 40;

-- select first name of stiudents who have registerd in the past 360 days

SELECT first_name FROM students WHERE registration_date >= current_date - 360;

-- AND/OR clause
-- allows you to add multiple different filters on the WHERE clause

SELECT * FROM students WHERE id > 100 AND id < 200;

-- Three Valued Logic

-- values can be in 3 different states true/present, false, null
-- NULL is a value that does not exist

-- select all students whose age less than 20 or null

SELECT * FROM students WHERE age < 20 OR age IS NULL;

-- select all students whose age is present

SELECT * FROM students WHERE age IS NOT NULL;


-- LIKE & ILIKE
-- used to pattern match strings
-- LIKE is case senstive
-- ILIKE is case insensitive (ignores case)
-- % is used as a wildcard value

-- get all students whose first names start with 'Jo'
SELECT * FROM students WHERE first_name LIKE 'Jo%';

-- BETWEEN
-- check if a column is between two different values

-- Get all students that are between the age of 25 and 35
SELECT * FROM students WHERE age BETWEEN 25 AND 35;

-- Get all students that have registered between 50 and 55 days ago;
SELECT * FROM students WHERE registration_date BETWEEN current_date - 50 AND current_date - 55;

-- ORDER BY
-- allows you to sort the results of a query
-- Find students whose names begin with jo ordered by their last name then age

SELECT * FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name;

-- ASC/DESC
-- by default ORDER BY will order by ascending. You can add the DESC clause to change that

-- Find students whose ages are more than 30 ordered by their first name then last name
SELECT * FROM students WHERE age > 30 ORDER BY first_name, last_name;


-- LIMIT
-- use to limit results of the query to n amount

-- Select first 10 students whose first names start with "ke" case insensitive

SELECT * FROM students WHERE first_name ILIKE 'ke%' LIMIT 10;

-- OFFSET
-- use to ignore the first n records of the query

SELECT * FROM students WHERE first_name ILIKE 'ke%' LIMIT 3 OFFSET 3; -- second set of 3 students
SELECT * FROM students WHERE first_name ILIKE 'ke%' LIMIT 3 OFFSET 6; -- third set of 3 students


-- 
-- 
-- Aggregate Functions
-- SQL has some built in functions that operate on records

-- COUNT
-- will count the amount of records from a query

-- get the number of students in the database
SELECT count(*) FROM students;

-- get the number of students whose age is greater than 25
SELECT count(*) FROM students WHERE age > 25;


-- AS
-- clause used to give an alias to a column or table

SELECT count(*) AS student_count FROM students;

-- SUM
-- use to add up all the values of a column from a query

SELECT sum(age) FROM students;

-- AVG
-- use to calculate the average of a column from a query

SELECT avg(age) FROM students;

-- ROUND
-- use to round a decimal value
SELECT round(avg(age)) FROM students;

-- MAX & MIN

SELECT max(age) FROM students; -- give us the age of the oldest student
SELECT min(age) FROM students; -- give us the age of the youngest student

-- get the max, min, avg, and total age of all students

SELECT max(age) AS maximum, min(age) AS minimum, avg(age) AS average, sum(age) AS total FROM students;

-- GROUP BY
-- allows you to group records from a query

-- count the number of students of a given age

SELECT count(age), age FROM students GROUP BY age;

-- Update
-- use to update existing records
-- make sure you use a WHERE clause to limit the amount of records that are updated... otherwise all records will be updated

UPDATE students SET first_name='tam' WHERE id=1;

-- DELETE
-- use to delete existing records
-- make sure you use a WHERE clause


-- To drop a database (delete a database use the psql command `dropdb <databse_name>`)
-- To run a SQL file in a database use:
psql -d database_name < path_to_sql_file.sql