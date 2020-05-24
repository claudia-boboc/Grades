package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.Teacher;

public interface TeacherRepository extends CrudRepository<Teacher, Long> {

}
