package com.campuscompass.backend.repository;

import com.campuscompass.backend.entity.College;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CollegeRepository extends JpaRepository<College, Long> {
}