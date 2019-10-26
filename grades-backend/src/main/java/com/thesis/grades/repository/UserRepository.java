package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.User;

public interface UserRepository extends CrudRepository<User, Long>{
}
