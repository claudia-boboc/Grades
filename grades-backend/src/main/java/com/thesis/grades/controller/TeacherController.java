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

import com.thesis.grades.model.StudentDto;
import com.thesis.grades.model.TeacherDto;
import com.thesis.grades.service.StudentService;
import com.thesis.grades.service.TeacherService;

@RestController
@RequestMapping("/grades/teachers")
public class TeacherController {

	@Autowired
	private TeacherService teacherService;
	
	@GetMapping
	public List<TeacherDto> findAll() {
		return teacherService.findAll();
	}
	
	@PostMapping
	public TeacherDto create(@RequestBody TeacherDto teacher ) {
		return teacherService.addTeacher(teacher);
	}
	
	@GetMapping("/{id}")
	public TeacherDto findTeacherById(@PathVariable Long id) {
		return this.teacherService.findTeacherById(id);
	}
	
	@PutMapping
	public TeacherDto update(@RequestBody TeacherDto teacher) {
		return teacherService.update(teacher);
	}
	
	@DeleteMapping("/{id}")
	public TeacherDto deleteById(@PathVariable Long id) {
		return teacherService.deleteById(id);
	}

	
}
