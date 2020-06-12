package com.thesis.grades.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student extends Person {

	@ManyToOne(cascade = CascadeType.ALL)
	 @JoinColumn(name="clasa_id", nullable=false)
	private SchoolClass classroom;
	
	public Student(Integer id, String surname, String firstName, String sex, Date dateOfBirth, SchoolClass classroom) {
		super(id, surname, firstName, sex, dateOfBirth);
		this.classroom = classroom;
	}

	public Student() {
		super();
	}

	public SchoolClass getClassroom() {
		return classroom;
	}

	public void setClassroom(SchoolClass classroom) {
		this.classroom = classroom;
	}

	

	

	
}
