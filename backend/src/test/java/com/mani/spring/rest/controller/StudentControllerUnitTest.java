package com.mani.spring.rest.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mani.spring.percistance.domain.Student;
import com.mani.spring.service.StudentService;

@SpringBootTest
public class StudentControllerUnitTest {

	@Autowired
	StudentController controller;

	@MockBean
	StudentService service;

	// fake data we are going to use to test this.
	private final Student TEST_STUDENT_1 = new Student(1, "Mani", "OneLastName", 6, "OneParentName", "07111111111");
	private final Student TEST_STUDENT_2 = new Student(2, "Mani", "TwoLastName", 12, "TwoParentName", "07222222222");
	private final Student TEST_STUDENT_3 = new Student(3, "ThreeFirstName", "ThreeLastName", 3, "ThreeParentName",
			"07333333333");
	private final Student TEST_STUDENT_4 = new Student(4, "FourFirstName", "FourLastName", 15, "FourParentName",
			"07444444444");
	private final List<Student> STUDENTS = List.of(TEST_STUDENT_1, TEST_STUDENT_2, TEST_STUDENT_3, TEST_STUDENT_4);

	// assertthat ACTUAL ->EXPECTEDcorrectone.
	@Test
	void createTest() throws Exception{
		when(this.service.create(TEST_STUDENT_1)).thenReturn(TEST_STUDENT_1);
		assertThat(new ResponseEntity<Student>(this.service.create(TEST_STUDENT_1), HttpStatus.CREATED))
				.isEqualTo(this.controller.create(TEST_STUDENT_1));
		verify(this.service, atLeastOnce()).create(TEST_STUDENT_1);
	}

	@Test
	void readAllTest() throws Exception {
		when(this.service.readAll()).thenReturn(STUDENTS);
		assertThat(this.controller.readAll().getBody().isEmpty()).isFalse();
		verify(this.service, atLeastOnce()).readAll();
	}

	@Test
	void readByStudentIDTest() throws Exception {
		when(this.service.readByStudentID(TEST_STUDENT_1.getStudentID())).thenReturn(TEST_STUDENT_1);
		assertThat(
				new ResponseEntity<Student>(this.service.readByStudentID(TEST_STUDENT_1.getStudentID()), HttpStatus.OK)
				).isEqualTo(this.controller.readByStudentID(TEST_STUDENT_1.getStudentID())
		);
		verify(this.service, atLeastOnce()).readByStudentID(TEST_STUDENT_1.getStudentID());
	}

	@Test
	void findByFirstNameLikeTest() throws Exception {
		when(this.service.findByFirstNameLike(TEST_STUDENT_1.getFirstName())).thenReturn(STUDENTS);
		assertThat(
				this.controller.findByFirstNameLike(TEST_STUDENT_1.getFirstName()))
                .isEqualTo(new ResponseEntity<List<Student>> (STUDENTS, HttpStatus.OK));
		verify(this.service, atLeastOnce()).findByFirstNameLike(TEST_STUDENT_1.getFirstName());
	}

	@Test
	void updateByStudentIDTest() throws Exception {
        when(this.service.updateByStudentID(TEST_STUDENT_1.getStudentID(), TEST_STUDENT_1))
                .thenReturn(TEST_STUDENT_1);
        assertThat(new ResponseEntity<Student>(TEST_STUDENT_1, HttpStatus.ACCEPTED))
                .isEqualTo(this.controller.updateByStudentID(TEST_STUDENT_1.getStudentID(), TEST_STUDENT_1));
        verify(this.service, atLeastOnce()).updateByStudentID(TEST_STUDENT_1.getStudentID(), TEST_STUDENT_1);
    }

	@Test
	void deleteByStudentIDTest() throws Exception {
		this.controller.deleteByStudentID(TEST_STUDENT_1.getStudentID());
        verify(this.service, atLeastOnce()).deleteByStudentID(TEST_STUDENT_1.getStudentID());
	}

}
