package com.mani.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Connector {
	
	// database url and authentication details
	private String URL = "jdbc:mysql://localhost:3306/scheduler_sample_2";
	private String USER = "root";
	private String PASS = "";
	
	//jdbc interfaces.
	public Connection connection;
	public Statement statement;
	
	// constructor
	public Connector() { // need to catch the exception and throw it outside of that method.
		
		try {
			//open the connection as soon as i call the class using this constructor.
			connection = DriverManager.getConnection(URL, USER, PASS);
			
			// create statements as soon as the connection opens (this is basically your INSERT DROP...)
			this.statement = connection.createStatement();
		} catch (SQLException e) {
			System.out.println("connection error");
			e.printStackTrace();
		}
		
	}
	
	
	
	
	// method to close the connection - because you dont want to leave it open all the time.
	public void close() throws SQLException{ // exception needed
		connection.close();
	}
	
	

}
