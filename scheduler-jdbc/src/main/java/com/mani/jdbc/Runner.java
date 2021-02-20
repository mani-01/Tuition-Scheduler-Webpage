package com.mani.jdbc;

import java.sql.SQLException;
import java.util.Scanner;

// note: this is just for now, so you can ignore this class when moving to GCP.
public class Runner {

	// TODO: using scanner at the moment for user inputs (move to GCP later)
	static Scanner sc = new Scanner(System.in);

	// get CRUD input from user
	public static String getAction() {
		return sc.nextLine().toLowerCase();
	}

	// you can put the 'throws' here so that you dont have multiple 'try catch' inside the method.
	public static void main(String[] args) throws SQLException {

		// create instance of the sql Connector class
		//Connector con = new Connector();
		// asking for Create, Read Update or Delete
		System.out.println("Enter CRUD operation:");
		String userCRUD = getAction(); 
		
		// 'try finally' means after everything is done it runs the finally.
		try {
			do {
				switch (userCRUD) {
				case "create":
					
					//working on this atm...
					//try create new to table
					
					Create cre = new Create();
					
					System.out.println("Enter Student's First Name:");
					String f = sc.nextLine();
					System.out.println("Enter Student's Last Name:");
					String l = sc.nextLine();
					System.out.println("Enter Student's Age:");
					int age = Integer.valueOf(sc.nextLine());
					System.out.println("Enter Parent's Name:");
					String p = sc.nextLine();
					System.out.println("Enter a Contact Number:");
					String c = sc.nextLine();
					
					cre.addStudent(f,l,age,p,c);
					
					System.out.println("type exit");
					
					
					break;
				case "read":
					break;
				case "update":
					break;
				case "delete":
					break;
				default:
					//ignore //throw new IllegalArgumentException("Unexpected value: " + userCRUD);
					System.out.println("enter create, read, update, or delete");
				}
				userCRUD = getAction();
			} while (!userCRUD.equals("exit"));
			System.out.println("Exited");
		} finally {
			sc.close(); // closing the scanner to prevent resourse leak.
			//con.close(); // closing the database.
		}
		

	}

	
	
}
