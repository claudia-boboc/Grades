package com.thesis.grades.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.thesis.grades.entity.Role;
import com.thesis.grades.entity.User;
import com.thesis.grades.model.RoleDto;
import com.thesis.grades.model.UserDto;
import com.thesis.grades.repository.RoleRepository;
import com.thesis.grades.repository.UserRepository;
import com.thesis.grades.service.UserService;
import com.thesis.grades.util.Mapper;

@Service
@Scope("singleton")
public class UserServiceImpl implements UserService{

		@Autowired
		private UserRepository userRepository;
		
		@Autowired
		private RoleRepository roleRepository;;
		
		@Override
		public List<UserDto> findAll() {
			
			return StreamSupport.stream(this.userRepository.findAll().spliterator(), false).map(Mapper::mapUserToDto).collect(Collectors.toList());
			
		}

		@Override
		public UserDto addUser(UserDto userDto) {
			User user = Mapper.mapUserDtoToEntity(userDto);
			if(user.getRole() != null) {
				Long id = user.getRole().getId();
				user.setRole(null);
				
				User savedUser = this.userRepository.save(user);
				return this.addRoleToUser(savedUser.getId(), id);
				
			}
			return Mapper.mapUserToDto(this.userRepository.save(user));
		}
		
		@Override
		public UserDto findUserById(Long id) {
			UserDto dto = Mapper.mapUserToDto(this.userRepository.findById(id).orElse(null));
			return dto;
		}

		@Override
		public UserDto update(UserDto userDto) {
			User foundUser = this.userRepository.findById(userDto.getId()).orElse(null);
			if(foundUser == null) {
				return this.addUser(userDto);
			}
			User user = Mapper.mapUserDtoToEntity(userDto);
			if(user.getName() != null && !user.getName().isEmpty()) {
				foundUser.setName(user.getName());
			}
			if(user.getRole() != null) {
				foundUser.setRole(user.getRole());
			}
			return Mapper.mapUserToDto(this.userRepository.save(foundUser));
			
			
		}

		@Override
		public UserDto deleteById(Long id) {
			User foundUser = this.userRepository.findById(id).orElse(null);
			if(foundUser == null) {
				return null;
			}
			this.userRepository.delete(foundUser);
			
			return Mapper.mapUserToDto(foundUser);		}

		@Override
		public RoleDto getUserRole(Long id) {
			User user = this.userRepository.findById(id).orElse(null);
			if(user == null) {
				return null;
			}
			if(user.getRole() != null) {
				return Mapper.mapRoleToDto(user.getRole());
			}
			
			return null;
		}

		@Override
		public UserDto addRoleToUser(Long userId, Long roleId) {
			User user = this.userRepository.findById(userId).orElse(null);
			if(user == null) {
				return null;
			}
			
			Role role = this.roleRepository.findById(roleId).orElse(null);
			if(role != null) {
				user.setRole(role);
			}
			
			return Mapper.mapUserToDto(this.userRepository.save(user));
		}
		
	}

