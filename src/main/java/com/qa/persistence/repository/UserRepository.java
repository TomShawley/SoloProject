package com.qa.persistence.repository;

public interface UserRepository {
	
	String createUser(String user);

	String deleteUser(String username);

	String getUser(String username);

}
