import React, { Component } from 'react';
import axios from 'axios';

class MyHoroscopes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            savedHoroscopes: []
         }
    }

    async componentDidMount () {
        try {
            const response = axios.get('/horoscopes');
            this.setState({savedHoroscopes: response.data});
            console.log(this.state.savedHoroscopes);
        } catch(e) {
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
 
export default MyHoroscopes;