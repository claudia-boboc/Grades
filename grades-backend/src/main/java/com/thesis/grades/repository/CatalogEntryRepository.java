package com.thesis.grades.repository;

import org.springframework.data.repository.CrudRepository;

import com.thesis.grades.entity.CatalogEntry;

public interface CatalogEntryRepository extends CrudRepository<CatalogEntry, Long> {

}
