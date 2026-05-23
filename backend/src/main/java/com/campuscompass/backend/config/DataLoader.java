package com.campuscompass.backend.config;

import com.campuscompass.backend.entity.College;
import com.campuscompass.backend.repository.CollegeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner loadData(CollegeRepository collegeRepository) {

        return args -> {

            if (collegeRepository.count() == 0) {

                collegeRepository.save(
                        new College(
                                null,
                                "IIT Delhi",
                                "Delhi",
                                4.8,
                                "₹2,00,000"));

                collegeRepository.save(
                        new College(
                                null,
                                "NIT Trichy",
                                "Tamil Nadu",
                                4.7,
                                "₹1,80,000"));

                collegeRepository.save(
                        new College(
                                null,
                                "IIIT Hyderabad",
                                "Hyderabad",
                                4.9,
                                "₹3,00,000"));
            }
        };
    }
}