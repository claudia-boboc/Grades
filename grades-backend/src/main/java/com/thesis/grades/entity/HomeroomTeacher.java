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
	private SchoolClass classroom;

	public HomeroomTeacher(Integer id, String surname, String firstName, String sex, Date dateOfBirth, Course course,
			List<SchoolClass> classrooms, SchoolClass classroom) {
		super(id, surname, firstName, sex, dateOfBirth, course, classrooms);
		this.classroom = classroom;
	}

	public HomeroomTeacher(Integer id, String surname, String firstName, String sex, Date dateOfBirth, Course course,
			List<SchoolClass> classrooms) {
		super(id, surname, firstName, sex, dateOfBirth, course, classrooms);
	}
	
	public HomeroomTeacher() {
		super();
	}

	public SchoolClass getClassroom() {
		return classroom;
	}

	public void setClassroom(SchoolClass classroom) {
		this.classroom = classroom;
	}



	
	

	
	
	
}
