package com.thesis.grades.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thesis.grades.service.RoleService;
import com.thesis.grades.model.RoleDto;;

@RestController
@RequestMapping("/grades/roles")
public class RoleController {

	@Autowired
	private RoleService roleService;

	@GetMapping
	public List<RoleDto> findAll() {
		return roleService.findAll();
	}
	
	@PostMapping
    public RoleDto create(@RequestBody RoleDto role) {
        return roleService.addRole(role);
    }
}
