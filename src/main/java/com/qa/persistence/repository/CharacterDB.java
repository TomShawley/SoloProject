package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.SUPPORTS;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.qa.persistence.domain.Character;

import com.qa.util.JSONUtil;

@Transactional(SUPPORTS)
@Default
public class CharacterDB implements Repository {
	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Inject
	private JSONUtil util;

	public String createUser(String User) {

		return null;
	}

	public String deleteUser(Long id) {

		return null;
	}

	public String createCharacter(String character) {
		Character aCharacter = util.getObjectForJSON(character, Character.class);
		manager.persist(aCharacter);
		return "{\"message\": \"character has been sucessfully added\"}";

	}

	public String deleteCharacter(Long id) {
		Character characterInDB = manager.find(Character.class, id);
		if (characterInDB != null) {
			manager.remove(characterInDB);
		}

		return "{\"message\": \"account sucessfully deleted\"}";

	}

	public String updateCharacter(Long id, String character) {
		Character aCharacter = manager.find(Character.class, id);
		manager.remove(aCharacter);
		Character updCharacter = util.getObjectForJSON(character, Character.class);
		manager.persist(updCharacter);
		return "{\"message\": \"account has been sucessfully updated\"}";
		
	}

	public String findCharacter(Long id) {
		Character character = manager.find(Character.class, id);
		return util.getJSONForObject(character);
		
	}

	public EntityManager getManager() {
		return manager;
	}

	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public JSONUtil getUtil() {
		return util;
	}

	public void setUtil(JSONUtil util) {
		this.util = util;
	}

}
