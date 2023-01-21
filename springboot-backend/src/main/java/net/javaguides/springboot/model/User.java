package net.javaguides.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;

	@Column(name = "email")
	private String email;
	
	// default constructor
	public User() {
		
	}
	// constructor with complete parameters
	public User(String firstName, String lastName, String email) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	// id getter
	public long getId() {
		return id;
	}
	// id setter
	public void setId(long id) {
		this.id = id;
	}
	// firstName setter
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	// firstName getter
	public String getFirstName() {
		return firstName;
	}
	// lastName setter
	public void setLastName(String lastName) {
		this.firstName = lastName;
	}
	// lastName getter
	public String getLastName() {
		return lastName;
	}

	public void setEmail(String email){ this.email = email;}

	public String getEmail(){ return email;}

}
