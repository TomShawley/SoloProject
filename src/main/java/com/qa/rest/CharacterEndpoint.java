package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.qa.service.Service;

@Path("/character")
public class CharacterEndpoint {
	@Inject
	private Service service;

	@Path("/createCharacter")
	@POST
	@Produces({ "application/json" })
	public String createCharacter(String character) {
		return service.createCharacter(character);
	}

	@Path("/deleteCharacter/{id}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteCharacter(Long id) {
		return service.deleteCharacter(id);
	}

	@Path("/updateCharacter/{id}")
	@PUT
	@Produces({ "application/json" })
	public String updateCharacter(Long id, String character) {
		return service.updateCharacter(id, character);
	}

	@Path("/findCharacter/{id}")
	@GET
	@Produces({ "application/json" })
	public String findCharacter(Long id) {
		return service.findCharacter(id);
	}

	public void setService(Service service) {
		this.service = service;
	}

}
