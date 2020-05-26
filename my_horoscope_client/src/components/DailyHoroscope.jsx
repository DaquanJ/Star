import React, { Component } from 'react';
import axios from 'axios';

class DailyHoroscope extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            horoscope: [],
            horscopes: '',
            day: 'today'
         }
         this.getHoroscope = this.getHoroscope.bind(this);
    }

    async componentDidMount() {
        try {
            const today = await axios.post(`https://aztro.sameerkumar.website?sign=libra&day=${this.state.day}`)
            this.setState({horoscope: today.data, isLoading: false})
            console.log(this.state.horoscope);
        } catch (e) {
            console.log(e);
        }
    }

    async getHoroscope(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`https://aztro.sameerkumar.website?sign=libra&day=${this.state.day}`);
            this.setState({horoscope: response.data});
            console.log(this.state.horoscope);
        } catch (e) {
            console.log(e);
        }
    }

    getDescription() {
         // use filter to get description from json of horoscope api
        // setstate, horoscopes with the value 
    }

    saveHoroscope () {
        // make post request using value returned from filter method 
    }

    render() { 
        const {isLoading} = this.state;
        if (isLoading) {
            return <h1> Loading . . . </h1>
        }
       
        return ( 
            <div>
                <form onSubmit={this.getHoroscope} >
                    <input type="submit" value='Yesterday' onClick={() => this.setState({day:'yesterday'})} />
                    <input type="submit" value='Today' onClick={() => this.setState({day:'today'})} />
                    <input type="submit" value='Tomorrow' onClick={() => this.setState({day:'tomorrow'})} />
                </form>
                    <div>
                        <h1> {this.state.horoscope.current_date} </h1>
                        <h3> Horoscope: {this.state.horoscope.description} </h3>
                        <p> Compatibility: {this.state.horoscope.compatibility} </p>
                        <p> Mood: {this.state.horoscope.mood} </p>
                        <p> Color: {this.state.horoscope.color} </p>
                        <p> Lucky Number: {this.state.horoscope.lucky_number} </p>
                        <p> Lucky Time: {this.state.horoscope.lucky_time} </p>
                    </div>
                    
            </div>
         );
    }
}
 
export default DailyHoroscope;