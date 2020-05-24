package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.Student;


public interface StudentRepository extends CrudRepository<Student, Long>{

}
