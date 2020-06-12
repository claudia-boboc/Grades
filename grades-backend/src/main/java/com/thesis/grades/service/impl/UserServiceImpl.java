package com.thesis.grades.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.thesis.grades.entity.User;
import com.thesis.grades.repository.UserRepository;
import com.thesis.grades.service.UserService;

@Service
@Scope("singleton")
public class UserServiceImpl implements UserService{

		@Autowired
		private UserRepository userRepository;

		@Autowired
		private BCryptPasswordEncoder bCryptPasswordEncoder;
		
		@Override
		public List<User> findAll() {
			return StreamSupport.stream(this.userRepository.findAll().spliterator(), false).collect(Collectors.toList());
		}

		@Override
		public User addUser(User user) {
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
			return this.userRepository.save(user);
		}
		
		@Override
		public User findUserById(Long id) {
			return this.userRepository.findById(id).orElse(null);
		}

		@Override
		public User saveOrUpdate(User user) {
			return this.userRepository.save(user);	
		}

		@Override
		public User deleteById(Long id) {
			User foundUser = this.userRepository.findById(id).orElse(null);
			if(foundUser == null) {
				return null;
			}
			this.userRepository.delete(foundUser);
			
			return foundUser;		
		}

		@Override
		public User addRoleToUser(Long userId, String role) {
			User user = this.userRepository.findById(userId).orElse(null);
			if(user == null) {
				return null;
			}
			
			user.getRoles().add(role);
			
			return this.userRepository.save(user);
		}
		
	}

