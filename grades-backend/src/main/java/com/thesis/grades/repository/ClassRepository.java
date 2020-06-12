package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.SchoolClass;

public interface ClassRepository extends CrudRepository<SchoolClass, Long> {

}
