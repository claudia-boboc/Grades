package com.thesis.grades.service;

import com.thesis.grades.entity.User;

public interface SecurityService {
	User getCurrentUser();

    boolean login(String username, String password);
}
