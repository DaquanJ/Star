import React, { Component } from 'react';
import axios from 'axios';

class MyHoroscopes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            savedHoroscopes: []
         }
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('/horoscopes');
            this.setState({savedHoroscopes: response.data});
        } catch(e) {
            console.log(e);
        }
    }

    deleteHoroscopes = async (id) => {
        const {savedHoroscopes} = this.state;
        try {
            const deleted = await axios.delete(`/horoscopes/${id}`, savedHoroscopes)
            let deletedHoroscopes = [...this.state.savedHoroscopes].filter(i => i.id !== id)
            this.setState({savedHoroscopes: deletedHoroscopes})
            console.log(deleted.data);
        } catch (e) {
            console.log(e)
        }
    }

    render() { 
        return ( 
            <div>
                {this.state.savedHoroscopes.map(horoscope => (
                    <div>
                        <h2 key={horoscope.id} > {horoscope.horoscopes} </h2>
                        <button onClick={() => this.deleteHoroscopes(horoscope.id)} > Delete </button>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default MyHoroscopes;