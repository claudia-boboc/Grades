package com.thesis.grades.entrypoint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableJpaRepositories("com.thesis.grades.repository") 
@EntityScan("com.thesis.grades.entity")
@ComponentScan("com.thesis.grades")
@EnableGlobalMethodSecurity(prePostEnabled = true)
@SpringBootApplication
public class GradesApplication {

	public static void main(String[] args) {
		SpringApplication.run(GradesApplication.class, args);
	}
	
	public WebMvcConfigurer corsConfigurer() {
	    return new WebMvcConfigurer() {
	      @Override
	      public void addCorsMappings(CorsRegistry registry) {
	    	  registry.addMapping("/**");
	      }
	    };
	  }

}
