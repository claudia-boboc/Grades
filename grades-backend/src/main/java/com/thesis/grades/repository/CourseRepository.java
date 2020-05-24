package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.Course;

public interface CourseRepository extends CrudRepository<Course, Long>{

}
