/*
 * pls ignore
 

package com.mani.spring.percistance.domain.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.mani.spring.percistance.domain.Student;

@SpringBootTest
@TestInstance(Lifecycle.PER_CLASS)
public class StudentRepositoryTest {

	@Autowired
	private StudentRepository repo;
	

	private final Student TEST_STUDENT_1 = new Student(1, "Mani", "OneLastName", 6, "OneParentName", "07111111111");
	private final Student TEST_STUDENT_2 = new Student(2, "Mani", "TwoLastName", 12, "TwoParentName", "07222222222");
	private final Student TEST_STUDENT_3 = new Student(3, "ThreeFirstName", "ThreeLastName", 3, "ThreeParentName",
			"07333333333");
	private final Student TEST_STUDENT_4 = new Student(4, "FourFirstName", "FourLastName", 15, "FourParentName",
			"07444444444");

	private final List<Student> STUDENTS = List.of(TEST_STUDENT_1, TEST_STUDENT_2, TEST_STUDENT_3, TEST_STUDENT_4);

	
	@BeforeAll
    void setup() {
        this.repo.saveAll(STUDENTS);
    }
	
	
	
	@Test
    void findByFirstNameLikeTest() throws Exception {
        assertThat(this.repo.findByFirstNameLike(TEST_STUDENT_1.getFirstName()).stream().map(e -> e.getFirstName())
                .collect(Collectors.toList()))
                        .isEqualTo(STUDENTS.stream().filter(e -> e.getFirstName().equals(TEST_STUDENT_1.getFirstName()))
                                .map(e -> e.getFirstName()).collect(Collectors.toList()));
    }

}
*/