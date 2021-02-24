package com.mani.spring.percistance.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mani.spring.percistance.domain.Student;

//repos in spring are interfaces, not classes
//can just get all the classes from the jpa repo because they will be the same.
public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	// above, when you are ectending the jparespository, you are passing in a...
	// Students object and a studentID Integer in the form of <Students, Integer>
	
	// it should run this custom query SELECT * FROM students WHERE firstName = '?';
	// need a method with a query annotation- this will then be called in the service layer.
	
	// 'sounds like' wont work because there is no function like that in SQL
	// when using MySQL you can use 'sounds like'.
	//@Query("SELECT s FROM Students s WHERE s.firstName SOUNDS LIKE :firstName")
	List<Student> findStudentByFirstNameLike(String firstName);

	
}




