package com.thesis.grades.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.thesis.grades.model.PermissionsEnum;


@Entity
@Table(name = "role")
public class Role {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	
	@Column(nullable = false, unique = true)
    private String name;
 
	@ElementCollection(fetch = FetchType.EAGER)
    private List<PermissionsEnum> permissions;


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

	public List<PermissionsEnum> getPermissions() {
		return permissions;
	}

	public void setPermissions(List<PermissionsEnum> permissions) {
		this.permissions = permissions;
	}

}
