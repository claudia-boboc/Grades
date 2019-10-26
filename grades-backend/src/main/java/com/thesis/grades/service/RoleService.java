package com.thesis.grades.service;

import java.util.List;

import com.thesis.grades.model.RoleDto;

public interface RoleService {

	List<RoleDto> findAll();
	RoleDto addRole(RoleDto roleDto);
}
