package com.qa.service;

public interface Service {
	
	String createUser(String user);
	String deleteUser(Long id);
	
	

	String createCharacter(String character);
	String deleteCharacter(String name);
	String updateCharacter(String name, String character);
	String getCharacter(String name);



}
