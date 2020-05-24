package com.example.my_horoscope.repository;

import com.example.my_horoscope.model.Horoscopes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HoroscopesRepository extends JpaRepository<Horoscopes, Long> {
}
