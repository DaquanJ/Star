package com.example.my_horoscope.controller;

import com.example.my_horoscope.exception.ResourceNotFoundException;
import com.example.my_horoscope.model.Horoscopes;
import com.example.my_horoscope.repository.HoroscopesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController

public class HoroscopesController {

    @Autowired
    private HoroscopesRepository horoscopesRepository;

    // get all horoscopes
    @GetMapping("/horoscopes")
    public List<Horoscopes> getAllHoroscopes(Model model) {
        return this.horoscopesRepository.findAll();
    }

    // save horoscopes
    @PostMapping("/horoscopes")
    public Horoscopes saveHoroscopes(@Valid @RequestBody Horoscopes horoscopes) {
        return horoscopesRepository.save(horoscopes);
    }

    // delete horoscopes
    @DeleteMapping("/horoscopes/{id}")
    public Map<String, Boolean> deletedHoroscopes(@PathVariable(value = "id") Long horoscopeId)
            throws ResourceNotFoundException {
        Horoscopes horoscope = horoscopesRepository.findById(horoscopeId)
                .orElseThrow(() -> new ResourceNotFoundException("Horoscope not found " + horoscopeId));
        horoscopesRepository.delete(horoscope);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted Horoscope", Boolean.TRUE);
        return response;
    }
}
