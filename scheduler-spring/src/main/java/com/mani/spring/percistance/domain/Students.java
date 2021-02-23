package com.mani.spring.percistance.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
public class Students {

	@Column
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private int studentID;
	
	@Column
	@NotNull
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	@Min(1)
	@Max(120)
	private int age;
	
	@Column
	private String parentName;
	
	@Column
	private String contactNumber;
	

	public Students(String firstName, String lastName, int age, String parentName, String contactNumber) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.parentName = parentName;
		this.contactNumber = contactNumber;
	}
	

	public int getStudentID() {
		return studentID;
	}

	public void setStudentID(int studentID) {
		this.studentID = studentID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	
	
	
	
}
