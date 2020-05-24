package com.thesis.grades.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "absence")
public class Absence extends CatalogEntry {

	@Column
	private String text;
	
	@Column
	private boolean accepted;
	
	public Absence(Integer id, Student student, Teacher teacher, Course course, Date date, String text, boolean accepted) {
		super(id, student, teacher, course, date);
		this.text = text;
		this.accepted = accepted;
	}
	public Absence(Integer id, Student student, Teacher teacher, Course course, Date date) {
		super(id, student, teacher, course, date);
	}
	
	public Absence() {
		super();
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public boolean isAccepted() {
		return accepted;
	}
	public void setAccepted(boolean accepted) {
		this.accepted = accepted;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + (accepted ? 1231 : 1237);
		result = prime * result + ((text == null) ? 0 : text.hashCode());
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
		Absence other = (Absence) obj;
		if (accepted != other.accepted)
			return false;
		if (text == null) {
			if (other.text != null)
				return false;
		} else if (!text.equals(other.text))
			return false;
		return true;
	}
	
	
	
	
	
	
}
