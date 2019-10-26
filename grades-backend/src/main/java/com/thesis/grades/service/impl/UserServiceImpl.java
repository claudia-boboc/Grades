package com.thesis.grades.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;


import com.thesis.grades.entity.User;

import com.thesis.grades.model.UserDto;
import com.thesis.grades.repository.UserRepository;
import com.thesis.grades.service.UserService;
import com.thesis.grades.util.Mapper;

@Service
@Scope("singleton")
public class UserServiceImpl implements UserService{

		@Autowired
		private UserRepository userRepository;
		
		@Override
		public List<UserDto> findAll() {
			
			return StreamSupport.stream(this.userRepository.findAll().spliterator(), false).map(Mapper::mapUserToDto).collect(Collectors.toList());
			
		}

		@Override
		public UserDto addUser(UserDto userDto) {
			User user = Mapper.mapUserDtoToEntity(userDto);
			return Mapper.mapUserToDto(this.userRepository.save(user));
		}
		
		@Override
		public UserDto findUserById(Long id) {
			UserDto dto = Mapper.mapUserToDto(this.userRepository.findById(id).orElse(null));
			return dto;
		}
		
	}

