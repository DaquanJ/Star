package com.example.my_horoscope.model;

import javax.persistence.*;

@Entity
@Table (name = "saved_horoscopes")

public class Horoscopes {
    @Id
    @GeneratedValue
    @Column(name = "horoscopes_id")
    private long id;

    @Column (name = "horoscopes")
    private String horoscopes;

    public Horoscopes() {
        super();
    }

    public Horoscopes(String horoscopes) {
        super();
        this.horoscopes = horoscopes;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getHoroscopes() {
        return horoscopes;
    }

    public void setHoroscopes(String horoscopes) {
        this.horoscopes = horoscopes;
    }
}
