package com.mani.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mani.spring.percistance.domain.Students;
import com.mani.spring.percistance.domain.repository.StudentsRepository;

import lombok.AllArgsConstructor;

// the service gets information from the repository.
// similar to how the service methods were used in rest controller, 
// the repo methods are going to be used in the service.
@Service
@AllArgsConstructor
public class StudentsService {
	
	private StudentsRepository repo;
	
//	// REMOVED BECAUSE OF LOMBOK
//	@Autowired 
//	public StudentsService(StudentsRepository repo) {
//		this.repo = repo;
//	}
	
	
	//crud methods in the service. 
	// these methods are called in the controller
	public Students create(Students s) {
		Students created = this.repo.save(s);
		return created;
	}
	
	public List<Students> readAll(){
		List<Students> thingsReadFromDb = this.repo.findAll();
		return thingsReadFromDb;
	} 
	
	public Students readBystudentID(int studentID) {
		Students thingReadFromDb = this.repo.getOne(studentID);
		return thingReadFromDb;
	}
	
	
	public List<Students> findStudentsByfirstName(String firstName){
		List<Students> thingfromRepo = this.repo.findStudentsByfirstName(firstName);
		return thingfromRepo;
	}
	
	public  Students updateBystudentID(int studentID, Students s) {
		//gets the thing we want from the database
		Students thingToUpdate = this.repo.getOne(studentID);
		//plugs in the new object instead.
		thingToUpdate.setContactNumber(s.getContactNumber());
		thingToUpdate.setAge(s.getAge());
		thingToUpdate.setFirstName(s.getFirstName());
		thingToUpdate.setLastName(s.getLastName());
		thingToUpdate.setParentName(s.getParentName());
		// saves the changed object to the db.
		return this.repo.save(thingToUpdate);
		
	}
	
	public boolean deleteBystudentID(int studnetID) {
		// delete object
		this.repo.deleteById(studnetID);
		// then check if object is deleted and output if true
		return !this.repo.existsById(studnetID);
	}
	
	
	
	
	

}


