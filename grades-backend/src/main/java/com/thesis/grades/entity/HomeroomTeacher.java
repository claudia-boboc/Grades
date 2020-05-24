package com.thesis.grades.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "homeroomTeacher")
public class HomeroomTeacher extends Teacher {

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "classroom_id", referencedColumnName = "id")
	private Class classroom;

	public HomeroomTeacher(Integer id, String surname, String firstName, String sex, Date dateOfBirth, Course course,
			List<Class> classrooms, Class classroom) {
		super(id, surname, firstName, sex, dateOfBirth, course, classrooms);
		this.classroom = classroom;
	}

	public HomeroomTeacher(Integer id, String surname, String firstName, String sex, Date dateOfBirth, Course course,
			List<Class> classrooms) {
		super(id, surname, firstName, sex, dateOfBirth, course, classrooms);
	}
	
	public HomeroomTeacher() {
		super();
	}

	public Class getClassroom() {
		return classroom;
	}

	public void setClassroom(Class classroom) {
		this.classroom = classroom;
	}



	
	

	
	
	
}
