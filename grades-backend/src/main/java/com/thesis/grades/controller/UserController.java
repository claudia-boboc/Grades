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

import com.thesis.grades.entity.User;
import com.thesis.grades.model.AddRoleToUserRequest;
import com.thesis.grades.service.UserService;

@RestController
@RequestMapping("/grades/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping
	public List<User> findAll() {
		return userService.findAll();
	}
	
	@PostMapping
    public User create(@RequestBody User user) {
        return userService.addUser(user);
    }
	
	@GetMapping("/{id}")
	public User findUserById(@PathVariable Long id) {
		return this.userService.findUserById(id);
	}
	
	@PostMapping("/{id}/role")
	public User addRoleToUser(@PathVariable Long id, @RequestBody AddRoleToUserRequest request) {
		return this.userService.addRoleToUser(id, request.getRole());
	}
	
	@PutMapping
	public User update(@RequestBody User user) {
		return userService.saveOrUpdate(user);
	}
	
	@DeleteMapping("/{id}")
	public User deleteById(@PathVariable Long id) {
		return userService.deleteById(id);
	}
}
