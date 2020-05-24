package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.Catalog;

public interface CatalogRepository extends CrudRepository<Catalog, Long> {

}
