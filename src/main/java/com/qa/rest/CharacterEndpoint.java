package com.qa.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.qa.service.CharacterService;
import com.qa.service.CharacterServiceImpl;


@Path("/character")
public class CharacterEndpoint {
	@Inject
	private CharacterService service;

	@Path("/createCharacter")
	@POST
	@Produces({ "application/json" })
	public String createCharacter(String character) {
		return service.createCharacter(character);
	}

	@Path("/deleteCharacter/{name}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteCharacter(@PathParam("name") String name) {
		return service.deleteCharacter(name);
	}

	@Path("/updateCharacter/{name}")
	@PUT
	@Produces({ "application/json" })
	public String updateCharacter(@PathParam("name")String name, String character) {
		return service.updateCharacter(name, character);
	}

	@Path("/findCharacter/{name}")
	@GET
	@Produces({ "application/json" })
	public String getCharacter(@PathParam("name") String name) {
		return service.getCharacter(name);
	}

	public void setService(CharacterService service) {
		this.service = service;
	}

}
