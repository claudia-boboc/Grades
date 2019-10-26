package com.thesis.grades.model;

public enum RolesEnum {
	ADMIN("Admin"),
	TEACHER("Teacher"),
	STUDENT("Student");
	
	private String name;
	
	private RolesEnum(String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
}
