package com.thesis.grades.model;

import java.util.ArrayList;
import java.util.List;

import com.thesis.grades.entity.Catalog;
import com.thesis.grades.entity.Course;
import com.thesis.grades.entity.HomeroomTeacher;
import com.thesis.grades.entity.Student;
import com.thesis.grades.entity.Teacher;

public class ClassDto {

	private Integer id;
	private List<Student> students = new ArrayList<Student>();
	private List<Teacher> teachers = new ArrayList<Teacher>();
	private HomeroomTeacher homeroomTeacher;
	private Catalog catalog;
	private List<Course> courses = new ArrayList<Course>();
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public List<Student> getStudents() {
		return students;
	}
	public void setStudents(List<Student> students) {
		this.students = students;
	}
	public List<Teacher> getTeachers() {
		return teachers;
	}
	public void setTeachers(List<Teacher> teachers) {
		this.teachers = teachers;
	}
	public HomeroomTeacher getHomeroomTeacher() {
		return homeroomTeacher;
	}
	public void setHomeroomTeacher(HomeroomTeacher homeroomTeacher) {
		this.homeroomTeacher = homeroomTeacher;
	}
	public Catalog getCatalog() {
		return catalog;
	}
	public void setCatalog(Catalog catalog) {
		this.catalog = catalog;
	}
	public List<Course> getCourses() {
		return courses;
	}
	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}
	
	
}
