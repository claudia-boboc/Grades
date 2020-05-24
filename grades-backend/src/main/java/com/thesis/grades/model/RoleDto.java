package com.thesis.grades.model;

import java.util.List;

public class RoleDto {
	private Long id;
	private String name;
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
		return this.permissions;
	}
	public void setPermissions(List<PermissionsEnum> permissions) {
		this.permissions = permissions;
	}
	
	
	
	
}
