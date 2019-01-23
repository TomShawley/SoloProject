package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.*;

import com.qa.service.Service;

@Path("/users")
public class UserEndpoint {
	@Inject
	private Service service;
	
	@Path("/createUser")
	@POST
	@Produces({"application/json"})
	public String createUser(String user) {
		return service.createUser(user);
	}
	
	@Path("deleteUser/{id}")
	@DELETE
	@Produces({"application/json"})
	public String deleteUser(Long id) {
		return service.deleteUser(id);
	}
	

	public void setService(Service service) {
		this.service = service;
	}
}
