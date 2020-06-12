package com.thesis.grades.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.thesis.grades.service.impl.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		        .authorizeRequests()
		        .antMatchers("/register").permitAll()
		        .antMatchers("/").permitAll()
		        .antMatchers("/grades/users").hasAuthority("USER")
		        .antMatchers("/login").permitAll()
				.antMatchers("/error").permitAll()
				.antMatchers("/error/**").permitAll()
		        .antMatchers("/getCurrentUser").fullyAuthenticated()
		        .anyRequest().fullyAuthenticated()
		.and().httpBasic()
		.and().logout()
		        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
		        .logoutSuccessUrl("/login?logout")
		        .deleteCookies("JSESSIONID")
		        .invalidateHttpSession(true).permitAll()
		.and().csrf().disable();
	}

	@Autowired
	public void configAuthentication(AuthenticationManagerBuilder auth)
	        throws Exception {
	    auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
	}

	@Bean
	public AuthenticationManager getAuthenticationManager() throws Exception {
		return super.authenticationManagerBean();
	}

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
