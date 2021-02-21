package com.mani.jdbc;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class StudentsCRUD {
	
	PreparedStatement pStatement;
	
	
	
	
	// adding a new student to the database. (CREATE)
	public void create(Student student){
		try {
			DBConnector con = new DBConnector();
			//using preparedStatements to increase security.
			String insertQuery = "INSERT INTO students("
					+ "first_name, last_name, age, parent_name, contact_number"
					+ ") VALUES ("
					+ "?, ?, ?, ?, ?);";
			
			//preparing the statement
			pStatement = con.connection.prepareStatement(insertQuery);
			
			//setting the parameters
			pStatement.setString(1, student.getFirstName());
			pStatement.setString(2, student.getLastName());
			pStatement.setInt(3, student.getAge());
			pStatement.setString(4, student.getParentName());
			pStatement.setString(5, student.getContactNumber());
			
			//excecute sql query
			pStatement.executeUpdate();
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	
	
	

//	//get a list of all the students. (READ)
	public void readAll() {
		try {
			DBConnector con = new DBConnector();
			String searchQuery = "SELECT * from students";
			pStatement = con.connection.prepareStatement(searchQuery);
			ResultSet rs = pStatement.executeQuery();
			List<Student> student = new ArrayList<>();
			while (rs.next()) {
				student.add(resultSetConverter(rs));
			}
			con.close();
			// in the future i could return a list here with the things needed.
			//but for now i will 
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	
	
	// get a contact number of a student by searching the first name. (READ)
	public void readFirstName(String firstName) {
		try {
			DBConnector con = new DBConnector();
			String searchQuery = "SELECT * FROM students WHERE first_name SOUNDS LIKE ?;";
			pStatement = con.connection.prepareStatement(searchQuery);
			pStatement.setString(1, firstName);
			ResultSet rs = pStatement.executeQuery();
			while (rs.next()) {
				resultSetConverter(rs);
			}
			con.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	
	
	// edit contact number details of existing students,(UPDATE)
	// if the user doesnt know the studentID but knows the first name ..
		// ..you can add that functionality to the runner. 
		// you have to do it this way because people can have the same first name.
	public void updateContactNumber(Student student) {
		try{
			DBConnector con = new DBConnector();
			String updateQuery = "UPDATE students SET contact_number = '?' WHERE student_id = ?;";
			pStatement = con.connection.prepareStatement(updateQuery);
			pStatement.setString(1, student.getContactNumber());
			pStatement.setInt(2, student.getStudentID());
			pStatement.executeUpdate();
			con.close();
			
		} catch (SQLException e) {
			// TODO: handle exception
		}
		
	}
	
	
	
	// delete existing students (DELETE)
	//same problem as Update.
		// if the user doesnt know the studentID but knows the first name ..
		// ..you can add that functionality to the runner. 
		// you have to do it this way because people can have the same first name.
	public void delete(int studentID) {
		try{
			DBConnector con = new DBConnector();
			String deleteQuery = "DELETE FROM students WHERE student_id = ?;";
			pStatement = con.connection.prepareStatement(deleteQuery);
			pStatement.setInt(1, studentID);
			pStatement.executeUpdate();
			con.close();
			
		} catch (SQLException e) {
			// TODO: handle exception
		}
	}
	
	
	
	
	
	
	//method to format entries from ResultSet that's returned from the query.
	public Student resultSetConverter(ResultSet rs) throws SQLException {
			int id = rs.getInt("student_id");
			String fname = rs.getString("first_name");
			String lname = rs.getString("last_name");
			int age = rs.getInt("age");
			String pname = rs.getString("parent_name");
			String cnumber = rs.getString("contact_number");

			//to the console.
			System.out.println(
					id + "\t\t" 
			+ fname + "\t\t"
			+ lname + "\t\t"
			+ age + "\t\t"
			+ pname + "\t\t"
			+ cnumber + "\t\t"); 

			return new Student(fname, lname, age, pname, cnumber);
	}


}
