package com.thesis.grades.service;

import java.util.List;

import com.thesis.grades.model.ClassDto;


public interface ClassService {

	List<ClassDto> findAll();
	ClassDto addClass(ClassDto classDto);
	
	ClassDto findClassById(Long id);
	
	ClassDto update(ClassDto classDto);
	
	ClassDto deleteById(Long id);
}
