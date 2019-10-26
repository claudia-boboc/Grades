package com.thesis.grades.util;

import com.thesis.grades.entity.Role;
import com.thesis.grades.entity.User;
import com.thesis.grades.model.RoleDto;
import com.thesis.grades.model.UserDto;

public class Mapper {

	public static RoleDto mapRoleToDto(Role role) {
		RoleDto dto = new RoleDto();
		dto.setId(role.getId());
		dto.setName(role.getName());
		dto.setPermissions(role.getPermission());
		
		return dto;
	}
	
	public static Role mapRoleDtoToEntity(RoleDto dto) {
		Role role = new Role();
		role.setName(dto.getName());
		role.setPermission(dto.getPermissions());
		
		return role;
	}
	
	public static UserDto mapUserToDto(User user) {
		if(user == null) {
			return null;
		}
		
		UserDto dto = new UserDto();
		dto.setId(user.getId());
		dto.setName(user.getName());
		dto.setRole(user.getRole());
		
		return dto;
	}
	
	public static User mapUserDtoToEntity(UserDto dto) {
		User user = new User();
		user.setId(dto.getId());
		user.setName(dto.getName());
	   user.setRole(dto.getRole());
		 return user;
		
	}
}
