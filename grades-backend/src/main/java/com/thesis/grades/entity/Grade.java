package com.thesis.grades.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "grade")
public class Grade extends CatalogEntry {

	@Column
	private Integer grade;
	
	public Grade(Integer id, Student student, Teacher teacher, Course course, Date date, Integer grade) {
		super(id, student, teacher, course, date);
		this.grade = grade;
	}

	public Grade(Integer id, Student student, Teacher teacher, Course course, Date date) {
		super(id, student, teacher, course, date);
	}

	public Grade() {
		super();
	}

	public Integer getGrade() {
		return grade;
	}

	public void setGrade(Integer grade) {
		this.grade = grade;
	}

	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((grade == null) ? 0 : grade.hashCode());
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
		Grade other = (Grade) obj;
		if (grade == null) {
			if (other.grade != null)
				return false;
		} else if (!grade.equals(other.grade))
			return false;
		return true;
	}

	
	
	
}
