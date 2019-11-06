package com.thesis.grades.model;

import java.util.List;

public class RoleDto {
	private Long id;
	private String name;
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
