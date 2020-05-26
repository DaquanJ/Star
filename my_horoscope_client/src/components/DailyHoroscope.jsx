import React, { Component } from 'react';
import axios from 'axios';

class DailyHoroscope extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            horoscopes: [],
            day: 'today'
         }
         this.getHoroscope = this.getHoroscope.bind(this);
    }

    async componentDidMount() {
        try {
            const today = await axios.post(`https://aztro.sameerkumar.website?sign=libra&day=${this.state.day}`)
            this.setState({horoscopes: today.data, isLoading: false})
            console.log(this.state.horoscopes);
        } catch (e) {
            console.log(e);
        }
    }

    async getHoroscope(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`https://aztro.sameerkumar.website?sign=libra&day=${this.state.day}`);
            this.setState({horoscopes: response.data});
            console.log(this.state.horoscopes);
        } catch (e) {
            console.log(e);
        }
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
                        <h1> {this.state.horoscopes.current_date} </h1>
                        <h2> Horoscope: {this.state.horoscopes.description} </h2>
                        <p> Compatibility: {this.state.horoscopes.compatibility} </p>
                        <p> Mood: {this.state.horoscopes.mood} </p>
                        <p> Color: {this.state.horoscopes.color} </p>
                        <p> Lucky Number: {this.state.horoscopes.lucky_number} </p>
                        <p> Lucky Time: {this.state.horoscopes.lucky_time} </p>
                    </div>
            </div>
         );
    }
}
 
export default DailyHoroscope;