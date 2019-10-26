package com.thesis.grades.entrypoint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("com.thesis.grades.repository") 
@EntityScan("com.thesis.grades.entity")
@ComponentScan("com.thesis.grades")
@SpringBootApplication
public class GradesApplication {

	public static void main(String[] args) {
		SpringApplication.run(GradesApplication.class, args);
	}

}
