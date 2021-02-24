package com.mani.jdbc;

import java.sql.SQLException;

public interface CRUD { // maybe need to delete?
	
	public void create();
	public void read();
	public void update();
	public void delete();
	
	void create(String first_name, String last_name, int age, String parent_name, String contact_number)
			throws SQLException;
	

}
