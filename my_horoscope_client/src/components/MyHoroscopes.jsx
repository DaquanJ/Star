import React, { Component } from 'react';
import axios from 'axios';

class MyHoroscopes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            savedHoroscopes: []
         }
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/horoscopes');
            this.setState({savedHoroscopes: response.data});
        } catch(e) {
            console.log(e);
        }
    }

    render() { 
        return ( 
            <div>
                {this.state.savedHoroscopes.map(horoscope => (
                    <div>
                        <h2 key={horoscope.id} > {horoscope.horoscopes} </h2>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default MyHoroscopes;