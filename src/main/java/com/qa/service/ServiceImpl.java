package com.qa.service;

import javax.inject.Inject;

import com.qa.persistence.repository.Repository;

public class ServiceImpl implements Service {
	@Inject
	private Repository repo;

	public String createUser(String user) {
		return repo.createUser(user);
	}

	public String deleteUser(String userName) {
		return repo.deleteUser(userName);
	}

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

	


