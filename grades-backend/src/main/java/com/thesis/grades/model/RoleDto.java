package com.thesis.grades.model;

public class RoleDto {
	private Long id;
	private String name;
	private PermissionsEnum permissions;
	
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
	public PermissionsEnum getPermissions() {
		return permissions;
	}
	public void setPermissions(PermissionsEnum permissions) {
		this.permissions = permissions;
	}
	
	
}
