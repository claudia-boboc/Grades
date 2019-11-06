package com.thesis.grades.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.thesis.grades.model.PermissionsEnum;


@Entity
public class Role {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	
	@Column(nullable = false, unique = true)
    private String name;
 
	@Enumerated(EnumType.STRING)
    private PermissionsEnum permission;
    
    @OneToOne(mappedBy = "userRole")
    private User gradesUser;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	public PermissionsEnum getPermission() {
		return permission;
	}

	public void setPermission(PermissionsEnum permission) {
		this.permission = permission;
	}

	public User getGradesUser() {
		return gradesUser;
	}

	public void setGradesUser(User gradesUser) {
		this.gradesUser = gradesUser;
	}

	
    
    

}
