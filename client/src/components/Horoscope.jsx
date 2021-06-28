import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/horoscope.css';


const Horoscope = () => {

    const [sign, setSign] = useState({ signs: "" })
    const [day, setDay] = useState({ day: 'today' });
    const [horoscope, setHoroscope] = useState([]);

    const getSign = (e) => {
        setSign({ [e.target.id]: e.target.value })
    }

    const getDay = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setDay({ [id]: value })
    }

    const getHoroscope = async () => {
        try {
            const res = await axios.post(`https://aztro.sameerkumar.website?sign=${sign.signs}&day=${day.day}`)
            setHoroscope(res.data)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        getHoroscope();
    }, [day.day])

    return (
        <div>
            <h1 id='app-name' > Your Star </h1> <img style={{ width: '4%', margin: '1% 0% 0% -5%' }} src="https://www.pngkey.com/png/full/182-1828465_picture-black-and-white-zodiac-from-the-box.png" alt="" />
            <form className='days' onClick={(e) => getDay(e)} onSubmit={getHoroscope} >
                <input type="submit" value='Yesterday' id='day' />
                <input type="submit" value='Today' id='day' />
                <input type="submit" value='Tomorrow' id='day' />
            </form>
            <div className='zodiac' >
                {/* <h1 id="title"> {match.params.sign.toUpperCase()} </h1> */}
                <div id='signs-image'>
                    <img src="https://static.wixstatic.com/media/e6f9d7_1cf63a10d9124730b66cfb48e7683a83~mv2.png/v1/fill/w_504,h_508,al_c,q_85,usm_0.66_1.00_0.01/Zodiac%20Wheel.webp" alt="signs" />
                </div>
                <form id='title' onChange={(e) => getSign(e)} onSubmit={getHoroscope} >
                    <input id='signs' type="text" placeholder="ENTER YOUR SIGN" required />
                </form>
                <div className="the-date" >
                    <p id="the-day" > {day.day} </p>
                    <p id="date">  {horoscope.current_date} </p>
                </div>
                <div id='horoscope'>
                    <h2 id="horoscope-head" > Horoscope </h2>
                    <p id="horoscope"> {horoscope.description} </p>
                </div>
                <ul className='info'>
                    <h3 id="basics"> BASICS </h3>
                    <li id="birthdays" > Dates: {horoscope.date_range} </li>
                    <li id="mood"> Mood: {horoscope.mood} </li>
                    <li id="compatibility"> Compatibility: {horoscope.compatibility} </li>
                    <li id="color" > Color: {horoscope.color} </li>
                    <li id="number"> Lucky Number: {horoscope.lucky_number} </li>
                    <li id="time"> Lucky Time: {horoscope.lucky_time} </li>
                </ul>
            </div>
        </div>
    );

}

export default Horoscope;