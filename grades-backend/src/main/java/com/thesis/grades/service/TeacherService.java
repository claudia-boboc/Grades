package com.thesis.grades.service;

import java.util.List;

import com.thesis.grades.model.TeacherDto;

public interface TeacherService {

	List<TeacherDto> findAll();
	TeacherDto addTeacher(TeacherDto teacherDto);
	
	TeacherDto findTeacherById(Long id);
	
	TeacherDto update(TeacherDto teacherDto);
	
	TeacherDto deleteById(Long id);
}
