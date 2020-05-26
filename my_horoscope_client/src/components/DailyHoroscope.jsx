import React, { Component } from 'react';
import axios from 'axios';

class DailyHoroscope extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            horoscopes: []
         }
    }

    async componentDidMount () {
        try {
            const response = await axios.post('https://aztro.sameerkumar.website?sign=libra&day=today');
            this.setState({horoscopes: response.data});
            console.log(this.state.horoscopes);
        } catch (e) {
            console.log(e);
        }
    }

    render() { 
        return ( 
            <div>

            </div>
         );
    }
}
 
export default DailyHoroscope;