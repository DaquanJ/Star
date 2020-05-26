import React, { Component } from 'react';
import axios from 'axios';

class DailyHoroscope extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            horoscopes: [],
            day: 'today'
         }
         this.getHoroscope = this.getHoroscope.bind(this);
    }

    async componentDidMount() {
        try {
            const today = await axios.post(`https://aztro.sameerkumar.website?sign=libra&day=${this.state.day}`)
            this.setState({horoscopes: today.data})
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
        return ( 
            <div>
                <form onSubmit={this.getHoroscope} >
                    <input type="submit" value='Yesterday' onClick={() => this.setState({day:'yesterday'})} />
                    <input type="submit" value='Today' onClick={() => this.setState({day:'today'})} />
                    <input type="submit" value='Tomorrow' onClick={() => this.setState({day:'tomorrow'})} />
                </form>
            </div>
         );
    }
}
 
export default DailyHoroscope;