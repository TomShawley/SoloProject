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

	public String createCharacter(String character) {
		Character newCharacter = util.getObjectForJSON(character, Character.class);
		if (newCharacter.getName().matches("[a-zA-Z]+") != true) {
			return "{\"message\": \"Character name can only contain letters\"}";
			
		}
		return repo.createCharacter(character);
	}

	public String deleteCharacter(String name) {
		return repo.deleteCharacter(name);
	}

	public String updateCharacter(String name, String character) {
		return repo.updateCharacter(name, character);
	}

	public String getCharacter(String name) {
		return repo.getCharacter(name);
	}

	}

	


