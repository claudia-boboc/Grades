package com.thesis.grades.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thesis.grades.model.AddRoleToUserRequest;
import com.thesis.grades.model.RoleDto;
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
	
	@GetMapping("/{id}/role")
	public RoleDto getUserRole(@PathVariable Long id) {
		return this.userService.getUserRole(id);
	}
	
	@PostMapping("/{id}/role")
	public UserDto addRoleToUser(@PathVariable Long id, @RequestBody AddRoleToUserRequest request) {
		return this.userService.addRoleToUser(id, request.getRoleId());
	}
	
	@PutMapping
	public UserDto update(@RequestBody UserDto user) {
		return userService.update(user);
	}
	
	@DeleteMapping("/{id}")
	public UserDto deleteById(@PathVariable Long id) {
		return userService.deleteById(id);
	}
}
