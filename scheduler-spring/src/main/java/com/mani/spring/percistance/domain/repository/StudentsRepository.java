package com.mani.spring.percistance.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mani.spring.percistance.domain.Students;

//repos in spring are interfaces, not classes
//can just get all the classes from the jpa repo because they will be the same.
public interface StudentsRepository extends JpaRepository<Students, Integer>{

}
