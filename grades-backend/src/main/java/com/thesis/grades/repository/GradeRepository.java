package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.Grade;


public interface GradeRepository extends CrudRepository<Grade, Long> {

}
