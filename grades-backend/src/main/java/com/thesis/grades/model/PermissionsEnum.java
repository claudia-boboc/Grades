package com.thesis.grades.model;

public enum PermissionsEnum {
	VIEW("View"),
	EDIT_USERS("Edit Users"),
	EXPORT_GRADES("Export Grades");
	
	private String name;
	
	private PermissionsEnum(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
}
