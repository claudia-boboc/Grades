package com.thesis.grades.service;

import java.util.List;

import com.thesis.grades.model.StudentDto;

public interface StudentService {

	List<StudentDto> findAll();
	
	StudentDto addStudent(StudentDto studentDto);
	
	StudentDto findStudentById(Long id);
	
	StudentDto update(StudentDto studentDto);
	
	StudentDto deleteById(Long id);
}
