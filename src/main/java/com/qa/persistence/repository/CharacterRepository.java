package com.qa.persistence.repository;

public interface CharacterRepository {
String createCharacter(String character);
	String deleteCharacter(String name);
	String updateCharacter(String name, String character);
	String getCharacter(String name);

}
