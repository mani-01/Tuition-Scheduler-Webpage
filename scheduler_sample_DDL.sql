CREATE DATABASE IF NOT EXISTS scheduler_sample;

USE scheduler_sample;

CREATE TABLE students (
student_id int(11) NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30),
age TINYINT NOT NULL,
parent_name VARCHAR(30),
contact_number VARCHAR(30),
PRIMARY KEY (student_id)
);

CREATE TABLE courses (
course_id INT(11) NOT NULL,
course_name VARCHAR(50) NOT NULL,
course_subject VARCHAR(30),
keystage TINYINT,
price_per_session FLOAT,
PRIMARY KEY (course_id)
);


CREATE TABLE lesson_schedule (
lesson_id INT(11) NOT NULL,
student_id INT(11) NOT NULL,
course_id INT(11) NOT NULL,
lesson_start DATETIME NOT NULL,
lesson_length TINYINT,
attended BIT,
payment_received BIT,
PRIMARY KEY (lesson_id),
FOREIGN KEY (student_id) REFERENCES students(student_id),
FOREIGN KEY (course_id) REFERENCES courses(course_id)
);


