package com.qa.persistence.repository;

public interface Repository {
	
	
	String createUser(String user);
	String deleteUser(Long id);
	
	

	String createCharacter(String character);
	String deleteCharacter(Long id);
	String updateCharacter(Long id, String character);
	String findCharacter(Long id);

}
