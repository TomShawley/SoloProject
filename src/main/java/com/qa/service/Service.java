package com.qa.service;

public interface Service {
	
	String createUser(String user);
	String deleteUser(Long id);
	
	

	String createCharacter(String character);
	String deleteCharacter(Long id);
	String updateCharacter(Long id, String character);
	String getCharacter(String name);



}
