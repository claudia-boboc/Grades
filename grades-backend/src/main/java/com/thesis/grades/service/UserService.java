package com.thesis.grades.service;

import java.util.List;

import com.thesis.grades.entity.User;

public interface UserService {

	List<User> findAll();
	
	User addUser(User user);
	
	User findUserById(Long id);
	
	User saveOrUpdate(User user);
	
	User deleteById(Long id);
	
	User addRoleToUser(Long userId, String role);
	
}
