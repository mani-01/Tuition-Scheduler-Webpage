package com.mani.jdbc;

public class Student {

	private int studentID;
	private String firstName;
	private String lastName;
	private int age;
	private String parentName;
	private String contactNumber;

	public Student(String firstName, String lastName, int age, String parentName, String contactNumber) {
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

	@Override
	public String toString() {
		return "Student [firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", parentName="
				+ parentName + ", contactNumber=" + contactNumber + "]";
	}

	
	//DO I NEED THE HASHCODE AND THE EQUALS METHODS????? 
	
	

}
