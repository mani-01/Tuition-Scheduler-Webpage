package com.mani.spring.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.mani.spring.percistance.domain.Student;
import com.mani.spring.percistance.domain.repository.StudentRepository;

//testing using GIVEN... WHEN... THEN.. method.
//given i have a service...
//when i try to run methods in my repo
// then return these values

// bean that lets the programme know that this is a test. 
@SpringBootTest
//@ActiveProfiles(profiles = "test")
public class StudentServiceUnitTest {

	@Autowired // this is the real thing that we're testing to see if it works (GIVEN)
	private StudentService service;

	@MockBean // this is the faked repo that we will use to bounce the request off.
	private StudentRepository repo;

	// fake data we are going to use to test this.
	private final Student TEST_STUDENT_1 = new Student(1, "Mani", "OneLastName", 6, "OneParentName",
			"07111111111");
	private final Student TEST_STUDENT_2 = new Student(2, "Mani", "TwoLastName", 12, "TwoParentName",
			"07222222222");
	private final Student TEST_STUDENT_3 = new Student(3, "ThreeFirstName", "ThreeLastName", 3, "ThreeParentName",
			"07333333333");
	private final Student TEST_STUDENT_4 = new Student(4, "FourFirstName", "FourLastName", 15, "FourParentName",
			"07444444444");

	private final List<Student> STUDENTS = List.of(TEST_STUDENT_1, TEST_STUDENT_2, TEST_STUDENT_3, TEST_STUDENT_4);

	// testing methods
	@Test
	void createTest() throws Exception {
		when(this.repo.save(TEST_STUDENT_1)).thenReturn(TEST_STUDENT_1);
		assertThat(this.service.create(TEST_STUDENT_1)).isEqualTo(TEST_STUDENT_1);
		verify(this.repo, atLeastOnce()).save(TEST_STUDENT_1);
		// verify method checks to see if the method was actually run.
	}

	@Test
	void readAllTest() throws Exception {
		when(this.repo.findAll()).thenReturn(STUDENTS);
		assertThat(this.service.readAll().isEmpty()).isFalse();
		verify(this.repo, atLeastOnce()).findAll();
	}

	@Test
	void readByStudentID() throws Exception {
		when(this.repo.findById(TEST_STUDENT_1.getStudentID())).thenReturn(Optional.of(TEST_STUDENT_1));
		assertThat(this.service.readByStudentID(TEST_STUDENT_1.getStudentID())).isEqualTo(TEST_STUDENT_1);
		verify(this.repo, atLeastOnce()).findById(TEST_STUDENT_1.getStudentID());
	}

	@Test
	void findByFirstNameLike() throws Exception {
		when(this.repo.findByFirstNameLike(TEST_STUDENT_1.getFirstName())).thenReturn(STUDENTS);
		assertThat(this.repo.findByFirstNameLike(TEST_STUDENT_1.getFirstName())).asList().isEqualTo(STUDENTS);
		verify(this.repo, atLeastOnce()).findByFirstNameLike(TEST_STUDENT_1.getFirstName());
	}
	
	@Test
	void updateByStudentID() throws Exception {
		when(this.repo.findById(TEST_STUDENT_1.getStudentID())).thenReturn(Optional.of(TEST_STUDENT_1));
		when(this.repo.save(TEST_STUDENT_1)).thenReturn(TEST_STUDENT_1);
		
		assertThat(this.service.updateByStudentID(TEST_STUDENT_1.getStudentID(), TEST_STUDENT_1)).isEqualTo(TEST_STUDENT_1);
		
		verify(this.repo, atLeastOnce()).findById(TEST_STUDENT_1.getStudentID());
		verify(this.repo, atLeastOnce()).save(TEST_STUDENT_1);
	}
	
	@Test
	void deleteByStudentID() throws Exception {
		boolean deleted = true; // reversed because it's like that in the service method
		System.out.println(this.repo.existsById(TEST_STUDENT_1.getStudentID()));
		when(this.repo.existsById(TEST_STUDENT_1.getStudentID())).thenReturn(!deleted);
		assertThat(this.service.deleteByStudentID(TEST_STUDENT_1.getStudentID())).isEqualTo(deleted);
		verify(this.repo, atLeastOnce()).existsById(TEST_STUDENT_1.getStudentID());
	}
	
	

	

	
	
	
	
	
}
