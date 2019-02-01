package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.util.Collection;
import java.util.List;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
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

	@Inject
	Character characters;
	private List<Character> characterList;

	public String createUser(String User) {

		return null;
	}

	public String deleteUser(Long id) {

		return null;
	}

	@Transactional(REQUIRED)
	public String createCharacter(String character) {
		Character aCharacter = util.getObjectForJSON(character, Character.class);
		manager.persist(aCharacter);
		return "{\"message\": \"character has been sucessfully added\"}";

	}

	@Transactional(REQUIRED)
	public String deleteCharacter(String name) {
		Query query = manager.createQuery("Select id FROM Character a WHERE a.name =:name");
		query.setParameter("name", name);
		@SuppressWarnings("unchecked")
		Long characterId = (long) query.getSingleResult();
		Character characterInDB = manager.find(Character.class, characterId);
	
		if (characterInDB != null) {
			manager.remove(characterInDB);
			return "{\"message\": \"character sucessfully deleted\"}";
		}

		return "{\"message\": \"character sucessfully deleted\"}";

	}

	@Transactional(REQUIRED)
	public String updateCharacter(String name, String character) {
		Query query = manager.createQuery("Select id FROM Character a WHERE a.name =:name");
		query.setParameter("name", name);
		@SuppressWarnings("unchecked")
		Long characterId = (long) query.getSingleResult();
		Character aCharacter = manager.find(Character.class, characterId);
		manager.remove(aCharacter);
		Character updCharacter = util.getObjectForJSON(character, Character.class);
		manager.persist(updCharacter);
		return "{\"message\": \"character has been sucessfully updated\"}";

	}

	public String getCharacter(String name) {
		Query query = manager.createQuery("Select a FROM Character a WHERE a.name =:name");
		query.setParameter("name", name);
		@SuppressWarnings("unchecked")
		Collection<Character> characters = (Collection<Character>) query.getResultList();
		return util.getJSONForObject(characters);
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
