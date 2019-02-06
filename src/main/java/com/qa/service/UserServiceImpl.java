package com.qa.service;

import javax.inject.Inject;


import com.qa.persistence.repository.UserRepository;

public class UserServiceImpl implements UserService {
	
	@Inject UserRepository userrepo;
	
	public String createUser(String user) {
		return userrepo.createUser(user);
	}

	public String deleteUser(String username) {
		return userrepo.deleteUser(username);
	}
	public String getUser(String username) {
		return userrepo.getUser(username);
	}
}
 


