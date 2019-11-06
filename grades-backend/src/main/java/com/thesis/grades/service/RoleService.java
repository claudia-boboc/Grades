package com.thesis.grades.service;

import java.util.List;

import com.thesis.grades.model.RoleDto;

public interface RoleService {

	List<RoleDto> findAll();
	RoleDto addRole(RoleDto roleDto);
	
	RoleDto findRoleById(Long id);
	
	RoleDto update(RoleDto roleDto);
	
	RoleDto deleteById(Long id);
	
}
