package com.qa.service;

import javax.inject.Inject;


import com.qa.persistence.repository.CharacterRepository;


public class CharacterServiceImpl implements CharacterService {
	@Inject
	private CharacterRepository repo;

	

	public String createCharacter(String character) {
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

	


