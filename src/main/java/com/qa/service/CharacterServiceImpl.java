package com.qa.service;

import javax.inject.Inject;

import com.qa.persistence.repository.CharacterRepository;
import com.qa.util.JSONUtil;
import com.qa.persistence.domain.Character;

public class CharacterServiceImpl implements CharacterService {
	@Inject
	private CharacterRepository repo;

	@Inject
	JSONUtil util;

	@Inject
	Character newCharacter;

	public String createCharacter(String character) {
		newCharacter = util.getObjectForJSON(character, Character.class);
		if (newCharacter.getName().isEmpty() == true) {
			return "{\"message\": \"Please enter a name.\"}";
		} else if (newCharacter.getName().matches("[a-zA-z_ ]+") != true) {
			return "{\"message\": \"Character name can only contain letters\"}";
		} else if (newCharacter.getRace().isEmpty() == true) {
			return "{\"message\": \"Please select a Race.\"}";
		} else if (newCharacter.getCharacterClass().isEmpty() == true) {
			return "{\"message\": \"Character must have a Class\"}";
		} else if (newCharacter.getLevel().isEmpty() == true) {
			return "{\"message\": \"Please enter a level\"}";
		} else if (newCharacter.getStrength().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Strength.\"}";
		} else if (newCharacter.getConstitution().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Constitution.\"}";
		} else if (newCharacter.getDexterity().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Dexterity.\"}";
		} else if (newCharacter.getIntelligence().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Intelligence.\"}";
		} else if (newCharacter.getWisdom().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Wisdom.\"}";
		} else if (newCharacter.getCharisma().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Charisma.\"}";
		} else
			return repo.createCharacter(character);
	}

	public String deleteCharacter(String name) {

		// if (name != newCharacter.getName()) {
		// return "{\"message\": \"There are no characters with that name\"}";
		// } else
		return repo.deleteCharacter(name);
	}

	public String updateCharacter(String name, String character) {
		// if (name != newCharacter.getName()) {
		// return "{\"message\": \"There are no characters with that name\"}";
		// }
		newCharacter = util.getObjectForJSON(character, Character.class);
		if (newCharacter.getName().isEmpty() == true) {
			return "{\"message\": \"Please enter a name.\"}";
		} else if (newCharacter.getName().matches("[a-zA-z]+") != true) {
			return "{\"message\": \"Character name can only contain letters\"}";
		} else if (newCharacter.getRace().isEmpty() == true) {
			return "{\"message\": \"Please select a Race.\"}";
		} else if (newCharacter.getCharacterClass().isEmpty() == true) {
			return "{\"message\": \"Character must have a Class\"}";
		} else if (newCharacter.getLevel().isEmpty() == true) {
			return "{\"message\": \"Please enter a level\"}";
		} else if (newCharacter.getStrength().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Strength.\"}";
		} else if (newCharacter.getConstitution().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Constitution.\"}";
		} else if (newCharacter.getDexterity().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Dexterity.\"}";
		} else if (newCharacter.getIntelligence().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Intelligence.\"}";
		} else if (newCharacter.getWisdom().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Wisdom.\"}";
		} else if (newCharacter.getCharisma().isEmpty() == true) {
			return "{\"message\": \"Please enter a value for Charisma.\"}";
		} else
			return repo.updateCharacter(name, character);
	}

	public String getCharacter(String name) {
//		if (name != newCharacter.getName()) {
//			return "{\"message\": \"There are no characters with that name\"}";
//		} else
			return repo.getCharacter(name);
	}

}
