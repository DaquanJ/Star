package com.example.my_horoscope.repository;

import com.example.my_horoscope.model.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewsRepository extends JpaRepository<Reviews, Long> {

}
