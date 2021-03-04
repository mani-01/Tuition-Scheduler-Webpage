package com.mani.spring.rest.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mani.spring.percistance.domain.Student;


@SpringBootTest
@AutoConfigureMockMvc
//the thing below clears everything and populates the database with test data before doing the test and clears it fully before starting another.
@Sql(scripts = { "classpath:schema.sql", "classpath:data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD) //loading in fake data
//@ActiveProfiles(profiles = "test")
public class StudentControllerIntegrationTest {
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired 
    private ObjectMapper mapper; // POJO object -> JSON conversion
	
	// the fake data
	private final Student TEST_STUDENT_1 = new Student(1, "Levon", "Riccione", 10, "Ainslie", "07773005758");
	private final Student TEST_STUDENT_2 = new Student(2, "Mathew", "Snowman", 14, "Anabal", "07533179983");
	private final Student TEST_STUDENT_3 = new Student(3, "Melody", "Zavattari", 13, null, "07759848967");
	private final Student TEST_STUDENT_4 = new Student(4, "Sheba", "Thompstone", 8, null, "07742506077");
	private final Student TEST_STUDENT_5 = new Student(5, "maahi", "kat", 7, "neela", "5668789");
	private final Student TEST_STUDENT_6 = new Student(6, "mani555", "ggg555", 55, "parent5", "0774611111");
	private final List<Student> STUDENTS = List.of(TEST_STUDENT_1, TEST_STUDENT_2, TEST_STUDENT_3, TEST_STUDENT_4, TEST_STUDENT_5, TEST_STUDENT_6);
	
	// defining the conversion map that is going to be used in some methods below
	
	@Test
	void createTest() throws Exception{
		// simulating what the user would post from the front end
		String simulatedUserPost = this.mapper.writeValueAsString(TEST_STUDENT_1);
		
		//put this through the spring application and does its thing
		this.mockMvc.perform(post("/student/create").accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON).content(simulatedUserPost))
                .andExpect(status().isCreated())
                .andExpect(content().json(simulatedUserPost));
	}
	

	@Test
	void readAllTest() throws Exception {
		//Student object together as a list converted to json
		String sList = this.mapper.writeValueAsString(STUDENTS);
		
		this.mockMvc.perform(get("/student/readAll").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
                .andExpect(content().json(sList));
	}
	
	
	
	@Test
	void readByStudentIDTest() throws Exception {
		String s = this.mapper.writeValueAsString(TEST_STUDENT_1);
		
		this.mockMvc.perform(get("/student/read/studentID/" + (TEST_STUDENT_1.getStudentID())).accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
                .andExpect(content().json(s));
		
	}

	
	@Test
	void findByFirstNameLikeTest() throws Exception {
		String sList = "[" + this.mapper.writeValueAsString(TEST_STUDENT_1) + "]"; 
		this.mockMvc.perform(get("/student/read/firstName/" + (TEST_STUDENT_1.getFirstName())).accept(MediaType.APPLICATION_JSON)) 
				.andExpect(status().isOk())
                .andExpect(content().json(sList));
		
	}

	@Test
	void updateByStudentIDTest() throws Exception {
		String s = this.mapper.writeValueAsString(TEST_STUDENT_2);
		
		this.mockMvc.perform(put("/student/update/studentID/" + (TEST_STUDENT_2.getStudentID())).accept(MediaType.APPLICATION_JSON)
				.contentType(MediaType.APPLICATION_JSON).content(s))
		.andExpect(status().isAccepted())
        .andExpect(content().json(s));
		
	}
//	
	@Test
	void deleteByStudentIDTest() throws Exception {
		String s = this.mapper.writeValueAsString(TEST_STUDENT_3);
		
		this.mockMvc.perform(delete("/student/delete/studentID/" + TEST_STUDENT_3.getStudentID()))
		.andExpect(status().isNoContent());
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
