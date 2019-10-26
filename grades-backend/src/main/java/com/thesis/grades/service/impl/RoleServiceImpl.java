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

}
