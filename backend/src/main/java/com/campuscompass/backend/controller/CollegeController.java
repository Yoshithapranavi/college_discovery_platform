package com.campuscompass.backend.controller;

import com.campuscompass.backend.entity.College;
import com.campuscompass.backend.repository.CollegeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class CollegeController {

    private final CollegeRepository collegeRepository;

    public CollegeController(CollegeRepository collegeRepository) {
        this.collegeRepository = collegeRepository;
    }

    @GetMapping("/colleges")
    public List<College> getAllColleges() {
        return collegeRepository.findAll();
    }

    @PostMapping("/colleges")
    public College addCollege(@RequestBody College college) {

        return collegeRepository.save(college);
    }

    @DeleteMapping("/colleges/{id}")
    public String deleteCollege(@PathVariable Long id) {

        collegeRepository.deleteById(id);

        return "College Deleted Successfully";
    }

    @PutMapping("/colleges/{id}")
    public College updateCollege(@PathVariable Long id, @RequestBody College updatedCollege) {

        College college = collegeRepository.findById(id).orElseThrow();

        college.setName(updatedCollege.getName());
        college.setLocation(updatedCollege.getLocation());
        college.setRating(updatedCollege.getRating());
        college.setFees(updatedCollege.getFees());

        return collegeRepository.save(college);
    }
}