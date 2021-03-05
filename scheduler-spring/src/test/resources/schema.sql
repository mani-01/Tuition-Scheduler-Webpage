DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student`
(
   `studentID` integer AUTO_INCREMENT,
   firstName varchar (255) not null,
   lastName varchar (255),
   age integer not null check
   (
      age<= 120
      AND
         age>= 1
   ),
   contactNumber varchar (255),
   parentName varchar (255),
   primary key (studentID)
);