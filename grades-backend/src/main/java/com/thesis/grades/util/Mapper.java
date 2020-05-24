package com.thesis.grades.util;

import com.thesis.grades.entity.Role;
import com.thesis.grades.entity.User;
import com.thesis.grades.model.RoleDto;
import com.thesis.grades.model.UserDto;

public class Mapper {

	public static RoleDto mapRoleToDto(Role role) {
		if( role == null ) {
			return null;
		}
		RoleDto dto = new RoleDto();
		dto.setId(role.getId());
		dto.setName(role.getName());
		dto.setPermissions(role.getPermissions());
		
		return dto;
	}
	
	public static Role mapRoleDtoToEntity(RoleDto dto) {
		Role role = new Role();
		if(dto == null ) {
			return null;
		}
		if(dto.getName() != null && !dto.getName().isEmpty()) {
			role.setName(dto.getName());
		}
		if(dto.getPermissions() != null && !dto.getPermissions().isEmpty()) {
			role.setPermissions(dto.getPermissions());
		}
		if(dto.getId() != null) {
			role.setId(dto.getId());
		}
		
		return role;
	}
	
	public static UserDto mapUserToDto(User user) {
		if(user == null) {
			return null;
		}
		
		UserDto dto = new UserDto();
		dto.setId(user.getId());
		dto.setName(user.getName());
		dto.setRole(Mapper.mapRoleToDto(user.getRole()));
		
		return dto;
	}
	
	public static User mapUserDtoToEntity(UserDto dto) {
		User user = new User();
		if(dto.getName() != null && !dto.getName().isEmpty()){
			user.setName(dto.getName());	
		}
		if(dto.getRole() != null)
		{
			user.setRole(Mapper.mapRoleDtoToEntity(dto.getRole()));
		}
		 return user;
		 
	}
}
