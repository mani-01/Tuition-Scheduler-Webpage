package com.mani.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import com.mani.spring.exception.StudentNotFoundException;
import com.mani.spring.percistance.domain.Student;
import com.mani.spring.percistance.domain.repository.StudentRepository;


// the service gets information from the repository.
// similar to how the service methods were used in rest controller, 
// the repo methods are going to be used in the service.
@Service
public class StudentService {
	
	private StudentRepository repo;
	
	// REMOVED BECAUSE OF LOMBOK
	@Autowired 
	public StudentService(StudentRepository repo) {
		this.repo = repo;
	}
	
	
	//crud methods in the service. 
	// these methods are called in the controller
	public Student create(Student s) {
		Student created = this.repo.save(s);
		return created;
	}
	
	public List<Student> readAll(){
		List<Student> thingsReadFromDB = this.repo.findAll();
		return thingsReadFromDB;
	}
	
	public Student readByStudentID(int studentID) {
			Student thingReadFromDB = this.repo.findById(studentID).orElseThrow(StudentNotFoundException::new);
			return thingReadFromDB;
	}
	
	
	//exception does not work properly?
	public List<Student> findByFirstNameLike(String firstName) throws StudentNotFoundException{
			List<Student> thingFromRepo = this.repo.findByFirstNameLike(firstName);
			return thingFromRepo;
	}
	
	public  Student updateByStudentID(int studentID, Student s) throws StudentNotFoundException {
		//gets the thing we want from the database
			Student thingToUpdate = this.repo.findById(studentID).orElseThrow(StudentNotFoundException::new);
			//plugs in the new object instead.
			thingToUpdate.setContactNumber(s.getContactNumber());
			thingToUpdate.setAge(s.getAge());
			thingToUpdate.setFirstName(s.getFirstName());
			thingToUpdate.setLastName(s.getLastName());
			thingToUpdate.setParentName(s.getParentName());
			// saves the changed object to the db.
			return this.repo.save(thingToUpdate);
	}
	
	public boolean deleteByStudentID(int studnetID) throws StudentNotFoundException {
		// delete object
		this.repo.deleteById(studnetID);
		// then check if object is deleted and output if true
		return !this.repo.existsById(studnetID);
	}
	

	
}


