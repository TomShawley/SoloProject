package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import javax.enterprise.inject.Vetoed;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import com.qa.persistence.domain.Character;
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
	public String deleteUser(String userName) {
		Query query = manager.createQuery("Select id FROM User a WHERE a.username =:userName");
		query.setParameter("username", userName);
		@SuppressWarnings("unchecked")
		Long UserId = (long) query.getSingleResult();
		Character UserInDB = manager.find(Character.class, UserId);
	
		if (UserInDB != null) {
			manager.remove(UserInDB);
			return "{\"message\": \"User sucessfully deleted\"}";
		}

		return "{\"message\": \"User not sucessfully deleted\"}";
		
	}

	

	public String createCharacter(String character) {

		return null;
	}

	public String deleteCharacter(String name) {

		return null;
	}

	public String updateCharacter(String name, String character) {

		return null;
	}

	public String getCharacter(String name) {

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
