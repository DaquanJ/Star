package com.example.my_horoscope.repository;

import com.example.my_horoscope.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
