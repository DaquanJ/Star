package com.example.my_horoscope.controller;

import com.example.my_horoscope.exception.ResourceNotFoundException;
import com.example.my_horoscope.model.Reviews;
import com.example.my_horoscope.repository.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController

public class ReviewsController {

    @Autowired
    ReviewsRepository reviewsRepository;

    // get all reviews
    @GetMapping("/reviews")
    public List<Reviews> getAllReviews(Model model) {
        return this.reviewsRepository.findAll();
    }

    // get reviews by id
    @GetMapping("/reviews/{id}")
    public ResponseEntity<Reviews> getReviewById(@PathVariable(value = "id") Long reviewId)
            throws ResourceNotFoundException {
        Reviews review = reviewsRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found" + reviewId));
        return ResponseEntity.ok().body(review);
    }

    // post reviews
    @PostMapping("/reviews")
    public Reviews createReview(@Valid @RequestBody Reviews review) {
        return reviewsRepository.save(review);
    }

}
