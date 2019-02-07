package com.qa.service;

import javax.inject.Inject;

import com.qa.persistence.domain.Character;
import com.qa.persistence.domain.User;
import com.qa.persistence.repository.UserRepository;
import com.qa.util.JSONUtil;

public class UserServiceImpl implements UserService {

	@Inject
	UserRepository userrepo;

	@Inject
	JSONUtil util;

	@Inject
	User newUser;

	public String createUser(String user) {
		newUser = util.getObjectForJSON(user, User.class);
		if (newUser.getPassword().matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}") == false) {
			return "{\"message\": \"Password must contain atleast One lowercase letter, one Capital Letter and one Number.\"}";
		} else if (newUser.getPassword().length() < 8 || newUser.getPassword().length() > 20) {
			return "{\"message\": \"Password must be beween 8 and 20 characters.\"}";
		}else
		return userrepo.createUser(user);
	}

	public String deleteUser(String username) {
		return userrepo.deleteUser(username);
	}

	public String getUser(String username) {
		return userrepo.getUser(username);
	}
}
