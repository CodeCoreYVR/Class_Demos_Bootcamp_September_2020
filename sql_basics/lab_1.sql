-- Create a student record with the following attributes: first_name: John, last_name: Smith, Age: 45, email: john@smith.com registration_date: January 1st 2016, phone_number: 778.778.7787
INSERT INTO students
  (first_name, last_name, age, email, registration_date, phone_number)
  VALUES
  ('John', 'Smith', 45, 'john@smith.com', 'January 1 2016', '778 100 2892');

-- Select that student from the database by fetching the last record
SELECT * FROM students 
  ORDER BY id DESC 
  LIMIT 1;

-- Using the id you fetched from the previous exercise, update the age of that record to become 50
UPDATE students 
  SET age = 50 
  WHERE id = 501;

-- Delete that record using its id

DELETE FROM students 
  WHERE id = 501;