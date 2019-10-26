package com.thesis.grades.service;

import java.util.List;

import com.thesis.grades.model.UserDto;

public interface UserService {

	List<UserDto> findAll();
	UserDto addUser(UserDto userDto);
	
	UserDto findUserById(Long id);
}
