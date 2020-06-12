package com.thesis.grades.entity;

import static javax.persistence.GenerationType.AUTO;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "school_class")
public class SchoolClass {
	
	@Id
	@GeneratedValue(strategy = AUTO)
	private Integer id;
	
	@OneToMany(mappedBy="classroom", cascade = CascadeType.ALL)
	private List<Student> students = new ArrayList<Student>();
	
	@ManyToMany(mappedBy = "classrooms", cascade = CascadeType.ALL)
	private List<Teacher> teachers = new ArrayList<Teacher>();
	
	@OneToOne(mappedBy = "classroom", cascade = CascadeType.ALL)
	private HomeroomTeacher homeroomTeacher;
	
	@OneToOne(mappedBy = "classroom", cascade = CascadeType.ALL)
	private Catalog catalog;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Course> courses = new ArrayList<Course>();
	
	public SchoolClass(Integer id, List<Student> students, List<Teacher> teachers, HomeroomTeacher homeroomTeacher, Catalog catalog,
			List<Course> courses) {
		super();
		this.id = id;
		this.students = students;
		this.teachers = teachers;
		this.homeroomTeacher = homeroomTeacher;
		this.catalog = catalog;
		this.courses = courses;
	}

	public SchoolClass() {
		super();
	}
	
	public Catalog getCatalog() {
		return catalog;
	}

	public void setCatalog(Catalog catalog) {
		this.catalog = catalog;
	}

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
	public List<Course> getCourses() {
		return courses;
	}
	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}

	@Override
	public String toString() {
		return "Clasa [id=" + id + ", elevi=" + students + ", profesori=" + teachers + ", diriginte=" + homeroomTeacher
				+ ", catalog=" + catalog + ", materii=" + courses + "]";
	}

	

	
	
	
	
	
	
	
}
