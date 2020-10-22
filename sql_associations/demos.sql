-- Get the title of all projects owned by the student with ID of 2

SELECT title FROM projects WHERE student_id = 2;

-- Get all student ids and scores for the course with id of 1;

SELECT student_id, score FROM enrolments WHERE course_id = 1;

-- Associations
-- Relationships between tables
-- data can be stored in different tables
-- Used to model complex data

-- Types of associations

-- One to Many
-- School has many Classes

-- One to One
-- Class has one School

-- Many to Many
-- Class has many students
-- Students have many classes
-- Usually requires a JOIN table

-- JOINS
-- There are several joins in SQL these statements are used to join columns from multiple tables

-- CROSS JOIN
-- Will grab all columns from table 1 and all columns from table 2
-- If table 1 has 1000 records and table 2 has 5000 records you will get a result of 1000*5000 records
-- Cross join is a super expensive operation and should be used wisely

-- INNER JOIN
-- Like a CROSS JOIN but with a FILTER

SELECT * FROM students
  INNER JOIN projects
  ON students.id = projects.student_id;

SELECT * FROM students
  INNER JOIN projects
  ON students.id = projects.student_id
  WHERE students.id < 20;

-- SELECT all students and their projects with names
SELECT students.id, students.first_name, projects.title FROM students
  INNER JOIN projects
  ON students.id = projects.student_id
  ORDER BY students.first_name;

-- MULTIPLE JOINS
-- You can use multiple JOIN statements to join multiple tables together

-- GET all students enrolled in the course whose title contains 'hybrid matrix'
SELECT students.id, students.first_name, courses.title
  FROM students
  JOIN enrolments ON students.id = enrolments.student_id
  JOIN courses ON enrolments.course_id = courses.id
  WHERE courses.title ILIKE '%hybrid matrix%';

-- Exercise: get all courses that have at least one student whose name begins with `RE`
SELECT courses.title, students.first_name, enrolments.score
  FROM students
  INNER JOIN enrolments ON students.id = enrolments.student_id
  INNER JOIN courses ON enrolments.course_id = courses.id
  WHERE students.first_name LIKE 'Re%';

-- OUTER JOIN / LEFT JOIN / RIGHT JOIN

-- Get all students & their projects... students without projects should also be inclued
SELECT students.id, students.first_name, projects.title 
  FROM students
  LEFT JOIN projects ON students.id = projects.student_id
  ORDER BY projects.title;

-- GET all students who don't have a project
SELECT students.id, students.first_name, projects.title
  FROM projects
  RIGHT JOIN students ON students.id = projects.student_id
  WHERE projects.title IS NULL;


-- List the avg score for each course. sort by the averages. display course title and average

SELECT courses.id, courses.title, ROUND(AVG(enrolments.score), 2) AS average_score
  FROM courses
  INNER JOIN enrolments ON courses.id = enrolments.course_id
  GROUP BY courses.id
  ORDER BY average_score DESC;

-- SUB-Query

-- List all courses with at least 5 enrolled students

-- - Show the number of enrolled students and course title.

SELECT * FROM (
  SELECT courses.title, COUNT(*) AS student_count
  FROM courses INNER JOIN enrolments ON courses.id = enrolments.student_id
  GROUP BY courses.id
  ORDER BY student_count DESC
) AS student_count
  WHERE student_count >= 4;

-- IN
-- https://www.w3schools.com/sql/sql_in.asp
-- lets you specify multiple values for a WHERE clause

SELECT id, first_name, last_name 
  FROM students
  WHERE id IN (2, 3, 4, 500, 1000);

-- ADDING CONSTRAINTS

-- Make sure all students must have a unique email
ALTER TABLE students
  ADD CONSTRAINT unique_email
  UNIQUE (email);

-- Make a table with a constraint
CREATE TABLE cars
  (
    make VARCHAR(50) CONSTRAINT must_exist NOT NULL,
    model VARCHAR(50) CONSTRAINT must_exist NOT NULL,
  );

-- TRANSACTIONS

-- If you need to write multiple transactions that rely on each other you can use a Transaction

-- 1) To begin a transaction use the Statement BEGIN
-- 2) Write all your SQL queries
-- 3) End the transaction with a COMMIT Statement
-- If any SQL query within the transaction fails then all SQL queries will fail (the entire transaction fails)



