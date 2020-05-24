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
import com.thesis.grades.model.ClassDto;
import com.thesis.grades.model.RoleDto;
import com.thesis.grades.model.UserDto;
import com.thesis.grades.service.ClassService;
import com.thesis.grades.service.UserService;

@RestController
@RequestMapping("/grades/class")
public class ClassController {

	@Autowired
	private ClassService classService;
	
	@GetMapping
	public List<ClassDto> findAll() {
		return classService.findAll();
	}
	
	@PostMapping
    public ClassDto create(@RequestBody ClassDto classroom) {
        return classService.addClass(classroom);
    }
	
	@GetMapping("/{id}")
	public ClassDto findClassById(@PathVariable Long id) {
		return this.classService.findClassById(id);
	}
	
	@PutMapping
	public ClassDto update(@RequestBody ClassDto classroom) {
		return classService.update(classroom);
	}
	
	@DeleteMapping("/{id}")
	public ClassDto deleteById(@PathVariable Long id) {
		return classService.deleteById(id);
	}

	
}
