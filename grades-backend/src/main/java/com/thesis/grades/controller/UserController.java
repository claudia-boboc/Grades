package com.thesis.grades.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thesis.grades.model.UserDto;
import com.thesis.grades.service.UserService;
@RestController
@RequestMapping("/grades/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping
	public List<UserDto> findAll() {
		return userService.findAll();
	}
	
	@PostMapping
    public UserDto create(@RequestBody UserDto user) {
        return userService.addUser(user);
    }
	
	@GetMapping("/{id}")
	public UserDto findUserById(@PathVariable Long id) {
		return this.userService.findUserById(id);
	}
}
