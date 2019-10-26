package com.thesis.grades.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.thesis.grades.model.PermissionsEnum;


@Entity
public class Role {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	
	@Column(nullable = false, unique = true)
    private String name;
 
    @Column(nullable = false)
    private PermissionsEnum permission;

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
    
    

}
