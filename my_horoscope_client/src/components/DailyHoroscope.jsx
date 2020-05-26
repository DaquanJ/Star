import React, { Component } from 'react';
import axios from 'axios';

class DailyHoroscope extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            horoscope: [],
            day: 'today',
            newHoroscope: {
                horoscopes: ''
            }
         };
         this.getHoroscope = this.getHoroscope.bind(this);
         this.saveHoroscope = this.saveHoroscope.bind(this);
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

    async saveHoroscope() {
       const userHoroscope = await this.state.horoscope.description;
       this.setState({horoscopes: userHoroscope});
       const {newHoroscope} = this.state;
       try {
           const savedHoroscope = await axios.post('/horoscopes', newHoroscope)
           console.log(savedHoroscope.data);
       } catch (e) {
           console.log(e)
           console.log(this.state.newHoroscope)
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
                        <h1> {this.state.horoscope.current_date} </h1>
                        <h3> Horoscope: {this.state.horoscope.description} </h3>
                        <button onClick={this.saveHoroscope} > Save ! </button>
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