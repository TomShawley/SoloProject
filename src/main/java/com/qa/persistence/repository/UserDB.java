package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import javax.enterprise.inject.Vetoed;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.qa.persistence.domain.User;
import com.qa.util.JSONUtil;

@Transactional(SUPPORTS)
@Vetoed
public class UserDB implements Repository {
	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Inject
	private JSONUtil util;
	
	@Transactional(REQUIRED)
	public String createUser(String user) {
		User aUser = util.getObjectForJSON(user, User.class);
		manager.persist(aUser);
		return "{\"message\": \"User has been sucessfully added\"}";
		
	}
	@Transactional(REQUIRED)
	public String deleteUser(Long id) {
		User userInDB = manager.find(User.class, id);
		if (userInDB != null) {
			manager.remove(userInDB);
		}

		return "{\"message\": \"User sucessfully deleted\"}";
		
	}

	

	public String createCharacter(String character) {

		return null;
	}

	public String deleteCharacter(Long id) {

		return null;
	}

	public String updateCharacter(Long id, String character) {

		return null;
	}

	public String findCharacter(Long id) {

		return null;
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
