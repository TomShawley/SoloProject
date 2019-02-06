package com.qa.service;

public interface CharacterService {
	String createCharacter(String character);
	String deleteCharacter(String name);
	String updateCharacter(String name, String character);
	String getCharacter(String name);



}
