package com.thesis.grades.entity;

import static javax.persistence.GenerationType.AUTO;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "catalog")
public class Catalog {

	@Id
	@GeneratedValue(strategy = AUTO)
	private Integer id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "classroom_id", referencedColumnName = "id")
	private Class classroom;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<CatalogEntry> entry = new ArrayList<CatalogEntry>();
	
	public Catalog(Class classroom, List<CatalogEntry> entry) {
		super();
		this.classroom = classroom;
		this.entry = entry;
	}
	public Catalog() {
		super();
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Class getClassroom() {
		return classroom;
	}
	public void setClassroom(Class classroom) {
		this.classroom = classroom;
	}
	public List<CatalogEntry> getEntry() {
		return entry;
	}
	public void setEntry(List<CatalogEntry> entry) {
		this.entry = entry;
	}
	@Override
	public String toString() {
		return "Catalog [id=" + id + ", clasa=" + classroom + ", inregistrare=" + entry + "]";
	}
	
	
	
	
	
	
	 
}


