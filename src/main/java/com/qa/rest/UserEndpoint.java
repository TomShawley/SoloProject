package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.*;

import com.qa.service.CharacterService;
import com.qa.service.UserService;
import com.qa.service.UserServiceImpl;

@Path("/users")
public class UserEndpoint {
	@Inject
	private UserService userService;
	
	@Path("/createUser")
	@POST
	@Produces({"application/json"})
	public String createUser(String user) {
		return userService.createUser(user);
	}
	
	@Path("/deleteUser/{username}")
	@DELETE
	@Produces({"application/json"})
	public String deleteUser(@PathParam("username") String username) {
		return userService.deleteUser(username);
	}
	@Path("/getUser/{username}")
	@GET
	@Produces({"application/json"})
	public String getUser(@PathParam("username") String username) {
		return userService.getUser(username);
	}
	

	public void setService(UserService service) {
		this.userService = service;
	}
}
