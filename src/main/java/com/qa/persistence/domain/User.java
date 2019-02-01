package com.qa.persistence.domain;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long userid;
	private String username;
	private String password;

	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "userid")
	private Set<Character> characters;

	private User() {

	}

	public User(String username, String password) {
		super();

		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
