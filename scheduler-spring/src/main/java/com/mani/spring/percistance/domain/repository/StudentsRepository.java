package com.mani.spring.percistance.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mani.spring.percistance.domain.Students;

//repos in spring are interfaces, not classes
//can just get all the classes from the jpa repo because they will be the same.
public interface StudentsRepository extends JpaRepository<Students, Integer>{
	
	// it should run this custom query SELECT * FROM students WHERE firstName = '?';
	// need a method with a query annotation- this will then be called in the service layer.
	//@Query("SELECT * FROM students WHERE firstName = ?")
	List<Students> findStudentsByfirstName(String firstName);

}




