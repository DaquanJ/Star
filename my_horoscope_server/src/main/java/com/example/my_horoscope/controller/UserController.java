package com.example.my_horoscope.controller;

import com.example.my_horoscope.exception.ResourceNotFoundException;
import com.example.my_horoscope.model.User;
import com.example.my_horoscope.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController

public class UserController {

    @Autowired
    private UserRepository userRepository;

    // get all users
    @GetMapping("/users")
    public List<User> getAllUsers(Model model) {
        return this.userRepository.findAll();
    }
    // get users by id
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Long userId)
            throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found" + userId));
        return ResponseEntity.ok().body(user);
    }
    // save users
    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }

    // update users
    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails)
            throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("user not found " + userId));

        user.setEmail(userDetails.getEmail());
        user.setUserName(userDetails.getUserName());
        user.setSign(userDetails.getSign());
        user.setPassword(userDetails.getPassword());

        final User updatedUser = userRepository.save(user);

        return ResponseEntity.ok(updatedUser);
    }

    // delete users
    @DeleteMapping("/users/{id}")
    public Map<String, Boolean> deletedUser(@PathVariable(value = "id") Long userId)
            throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found " + userId));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted User", Boolean.TRUE);
        return response;

    }

}
