package com.mani.spring.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
// reponse entitiy would be in a json format.
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mani.spring.percistance.domain.Students;
import com.mani.spring.service.StudentsService;

// the controller translates front end requests (like the ones from postman)...
// ...and sends that to the service
@RestController
//this is where the name of the url to access the whole table goes
// example -> jdbc:serverURL:port/students
@RequestMapping("/students") 
public class StudentsController {
	
	//passes things into the service through the variable and constructor.
	private StudentsService service;
	
	// this controller links the front end to the service layer
	// so the contructor is pointing there for the service to work
	// spring works on singleton design pattern so wires things together automatically.
	// beans are singleton by default
	// by a process called dependancy injection
	@Autowired
	public StudentsController(StudentsService service) {
		super();
		this.service = service;
	}
	

	// CREATE 
	@PostMapping("/create")
	// need to pass in a json version of the students object...
	// ... thats why you need an @requestbody bean 
	//- because says that the input would be in json format
	// here you are translating JS into java. (json to java)
	public ResponseEntity<Students> create(@RequestBody Students s) {
		Students createdObject = this.service.create(s);
		return new ResponseEntity<>(createdObject, HttpStatus.CREATED); // http code 201
	}
	
	
	
	// READ ALL
	@GetMapping("/readAll")
	// the type of object that comes back from the database is called a 'response entity'.
	// the 'response entity' is a Collection (list, arraylist etc..).
	// basically it returns a list of coffee objects from the database.
	// the returned Response Enity will be in a json format.
	public ResponseEntity<List<Students>> readAll() {
		// the service layer works with java 
		// so you would need to do the conversion from java to json in the controller
		// so that the front-end would understand
		// basically wrapped the output from 'service' by reponse entitiy.
		return ResponseEntity.ok(this.service.readAll()); // http code 200
		// the '.ok' thing means it would return a http ok code 200.
	}
	
	//read by id (search by name later)
	@GetMapping("/read/{id}")
	public ResponseEntity<Students> readBystudentID(@PathVariable int studentID){
		Students returnedObject = this.service.readBystudentID(studentID);
		
		return ResponseEntity.ok(returnedObject);
	}
	
	
	// update by id
		// step 1 - get the object you want to change
		// step 2 - change it
		// step 3 - put it back
	@PutMapping("/update/{id}") // the '{id}' relates to the path variable.
	public ResponseEntity<Students> updateBystudentID(@PathVariable int studentID, @RequestBody Students s){
		Students updatedObject = this.service.updateBystudentID(studentID, s);
		return new ResponseEntity<>(updatedObject, HttpStatus.ACCEPTED); // http code 200
	}
	
	
	// delete by id
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Students> deleteBystudentID(@PathVariable int studentId) {
		if (this.service.deleteBystudentID(studentId)) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT); //successfully deleted. 
		} else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}  
	}
	
	
	
}








