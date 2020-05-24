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

import com.thesis.grades.model.RoleDto;
import com.thesis.grades.model.StudentDto;
import com.thesis.grades.service.StudentService;

@RestController
@RequestMapping("/grades/students")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@GetMapping
	public List<StudentDto> findAll() {
		return studentService.findAll();
	}
	
	@PostMapping
	public StudentDto create(@RequestBody StudentDto student ) {
		return studentService.addStudent(student);
	}
	
	@GetMapping("/{id}")
	public StudentDto findStudentById(@PathVariable Long id) {
		return this.studentService.findStudentById(id);
	}
	
	@PutMapping
	public StudentDto update(@RequestBody StudentDto student) {
		return studentService.update(student);
	}
	
	@DeleteMapping("/{id}")
	public StudentDto deleteById(@PathVariable Long id) {
		return studentService.deleteById(id);
	}
}
