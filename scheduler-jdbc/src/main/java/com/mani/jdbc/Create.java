package com.mani.jdbc;

import java.sql.SQLException;

public class Create {
	
	DBConnector con = new DBConnector();
	
	public void createNewStudent(
			String first_name, 
			String last_name, 
			int age, String 
			parent_name, 
			String contact_number) throws SQLException { // how do i catch this exception?
		
		
		String statement = "INSERT INTO students(first_name, last_name, age, parent_name, contact_number) VALUES ("
				+ "'" + first_name + "'" + ","
				+ "'" + last_name + "'" + ","
				+ age + ","
				+ "'" + parent_name + "'" + ","
				+ "'" + contact_number + "'" + ");";
		
		con.statement.executeUpdate(statement); //sending the statement to the database
		
		con.close();
		}
	
	
		
	}
