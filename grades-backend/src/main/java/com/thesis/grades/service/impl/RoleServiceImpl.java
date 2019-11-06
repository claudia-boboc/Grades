package com.thesis.grades.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.thesis.grades.entity.Role;
import com.thesis.grades.model.RoleDto;
import com.thesis.grades.repository.RoleRepository;
import com.thesis.grades.service.RoleService;
import com.thesis.grades.util.Mapper;

@Service
@Scope("singleton")
public class RoleServiceImpl implements RoleService{

	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public List<RoleDto> findAll() {
		return StreamSupport.stream(this.roleRepository.findAll().spliterator(), false).map(Mapper::mapRoleToDto)
			    .collect(Collectors.toList());
	}

	@Override
	public RoleDto addRole(RoleDto roleDto) {
		Role role = Mapper.mapRoleDtoToEntity(roleDto);
		return Mapper.mapRoleToDto(this.roleRepository.save(role));
	}

	@Override
	public RoleDto findRoleById(Long id) {
		RoleDto dto = Mapper.mapRoleToDto(this.roleRepository.findById(id).orElse(null));
		return dto;
	}

	@Override
	public RoleDto update(RoleDto roleDto) {
		Role foundRole = this.roleRepository.findById(roleDto.getId()).orElse(null);
		if(foundRole == null) {
			return this.addRole(roleDto);
		}
		Role role = Mapper.mapRoleDtoToEntity(roleDto);
		if(role.getName() != null && !role.getName().isEmpty()) {
			foundRole.setName(role.getName());
		}
		if(role.getPermission() != null) {
			foundRole.setPermission(role.getPermission());
		}
		return Mapper.mapRoleToDto(this.roleRepository.save(foundRole));
		
	}

	@Override
	public RoleDto deleteById(Long id) {
		Role foundRole = this.roleRepository.findById(id).orElse(null);
		if(foundRole == null) {
			return null;
		}
		this.roleRepository.delete(foundRole);
		
		return Mapper.mapRoleToDto(foundRole);
				
	}
}
