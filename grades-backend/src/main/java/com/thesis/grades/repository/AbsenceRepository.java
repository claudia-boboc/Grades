package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.Absence;

public interface AbsenceRepository extends CrudRepository<Absence, Long> {
	

}
