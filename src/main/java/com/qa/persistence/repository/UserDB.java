package com.qa.persistence.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.util.Collection;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import com.qa.persistence.domain.Character;
import com.qa.persistence.domain.User;
import com.qa.util.JSONUtil;

@Transactional(SUPPORTS)
@Default
public class UserDB implements UserRepository {
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
	public String deleteUser(String username) {
		Query query = manager.createQuery("Select id FROM User a WHERE a.username =:username");
		query.setParameter("username", username);
		@SuppressWarnings("unchecked")
		Long UserId = (long) query.getSingleResult();
		Character UserInDB = manager.find(Character.class, UserId);

		if (UserInDB != null) {
			manager.remove(UserInDB);
			return "{\"message\": \"User sucessfully deleted\"}";
		}

		return "{\"message\": \"User not sucessfully deleted\"}";

	}

	
	public String getUser(String username) {
		Query query = manager.createQuery("Select a FROM User a WHERE a.username =:username");
		query.setParameter("username", username);
		@SuppressWarnings("unchecked")
		Collection<User> users = (Collection<User>) query.getResultList();
		return util.getJSONForObject(users);

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
