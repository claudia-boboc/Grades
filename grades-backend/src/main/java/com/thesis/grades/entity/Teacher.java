package com.thesis.grades.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "teacher")
@Inheritance(strategy = InheritanceType.JOINED)
public class Teacher extends Person {

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "course_id", referencedColumnName = "id")
	private Course course;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			  name = "profesor_clasa", 
			  joinColumns = @JoinColumn(name = "profesor_id"), 
			  inverseJoinColumns = @JoinColumn(name = "clasa_id"))
	private List<SchoolClass> classrooms = new ArrayList<SchoolClass>();
	
	public Teacher(Integer id, String surname, String firstName, String sex, Date dateOfBirth, Course course,
			List<SchoolClass> classrooms) {
		super(id, surname, firstName, sex, dateOfBirth);
		this.course = course;
		this.classrooms = classrooms;
	}
	public Teacher(Integer id, String surname, String firstName, String sex, Date dateOfBirth) {
		super(id, surname, firstName, sex, dateOfBirth);
	}
	public Teacher() {
		super();
	}
	
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	public List<SchoolClass> getClassrooms() {
		return classrooms;
	}
	public void setClassrooms(List<SchoolClass> classrooms) {
		this.classrooms = classrooms;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((classrooms == null) ? 0 : classrooms.hashCode());
		result = prime * result + ((course == null) ? 0 : course.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Teacher other = (Teacher) obj;
		if (classrooms == null) {
			if (other.classrooms != null)
				return false;
		} else if (!classrooms.equals(other.classrooms))
			return false;
		if (course == null) {
			if (other.course != null)
				return false;
		} else if (!course.equals(other.course))
			return false;
		return true;
	}
	
	
	
	
	
	
	
	
	
}
