package com.qa.service;

import javax.inject.Inject;

import com.qa.persistence.repository.Repository;

public class ServiceImpl implements Service {
	@Inject
	private Repository repo;

	public String createUser(String user) {
		return repo.createUser(user);
	}

	public String deleteUser(Long id) {
		return repo.deleteUser(id);
	}

	public String createCharacter(String character) {
		return repo.createCharacter(character);
	}

	public String deleteCharacter(Long id) {
		return repo.deleteCharacter(id);
	}

	public String updateCharacter(Long id, String character) {
		return repo.updateCharacter(id, character);
	}

	public String getCharacter(String name) {
		return repo.getCharacter(name);
	}

	}

	


