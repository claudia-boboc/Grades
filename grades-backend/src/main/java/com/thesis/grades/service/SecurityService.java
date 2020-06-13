package com.thesis.grades.service;

import com.thesis.grades.entity.User;

public interface SecurityService {
	User getCurrentUser();

    User login(String username, String password);

    boolean logout();
}
