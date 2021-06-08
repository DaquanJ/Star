import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Horoscope = ({ match }) => {

    const [horoscope, setHoroscope] = useState([]);
    const [day, setDay] = useState({ day: 'today' });

    const getHoroscope = async () => {
        try {
            const res = await axios.post(`https://aztro.sameerkumar.website?sign=${match.params.sign}&day=${day.day}`)
            setHoroscope(res.data)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getDay = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setDay({ [id]: value })
        console.log(day)
    }

    useEffect(() => {
        getHoroscope();
    }, [day.day])

    return (
        <div>
            <h1> {match.params.sign}</h1>
            <form className='days' onClick={(e) => getDay(e)} onSubmit={getHoroscope} >
                <input type="submit" value='yesterday' id='day' />
                <input type="submit" value='today' id='day' />
                <input type="submit" value='tomorrow' id='day' />
            </form>
            <div className='zodiac' >
                <div>
                    <h1> {horoscope.current_date} </h1>
                </div>
                <div>
                    <p> {horoscope.description} </p>
                </div>
                <div>
                    {/* <button onClick={this.saveHoroscope} > Save ! </button> */}
                </div>
                <div>
                    <p> Compatibility: {horoscope.compatibility} </p>
                </div>
                <div>
                    <p> Mood: {horoscope.mood} </p>
                </div>
                <div>
                    <p> Color: {horoscope.color} </p>
                </div>
                <div>
                    <p> Lucky Number: {horoscope.lucky_number} </p>
                </div>
                <div>
                    <p> Lucky Time: {horoscope.lucky_time} </p>
                </div>
            </div>
        </div>
    );

}

export default Horoscope;