package com.thesis.grades.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.thesis.grades.entity.User;
import com.thesis.grades.service.SecurityService;
import com.thesis.grades.service.UserService;

@RestController
public class LoginController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private SecurityService securityService;
	
	@PostMapping("/register")
    public User register(@RequestBody User user) {
        User registeredUser = this.userService.addUser(user);
        
        securityService.login(user.getUsername(), user.getPassword());
        
        return registeredUser;
    }

	@PostMapping("/login")
	public User login(@RequestBody User user) {
		return securityService.login(user.getUsername(), user.getPassword());
	}

	@GetMapping("/logout")
	public boolean logout() {
		return this.securityService.logout();
	}
	
	@GetMapping("/getCurrentUser")
	public User getCurrentUser( ) {
		return this.securityService.getCurrentUser();
	}
}
