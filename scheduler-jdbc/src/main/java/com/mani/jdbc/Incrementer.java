//package com.mani.jdbc;
//
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//public class Incrementer {
//
//	Connector con = new Connector();
//
////	public int valuesInTable(String tableName) throws SQLException {
////		String query = "SELECT COUNT(*) FROM " + tableName;
////		ResultSet results = con.statement.executeQuery(query);
////		int numColumns = results.getInt(0);
////		return numColumns;
////	}
//	
//	public void valuesInTable(String tableName) throws SQLException {
//		//String query = "SELECT COUNT(*) FROM " + tableName + ";";
//		String query = "SELECT * FROM " + tableName + ";";
//		ResultSet results = con.statement.executeQuery(query);
//		while (results.next()){
//			System.out.println(results.getInt("student_id"));
//		}
//	}
//
//	public void close() throws SQLException {
//		con.close();
//	}
//
//}
