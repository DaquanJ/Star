import React, { Component } from 'react';
import axios from 'axios';

class MyHoroscopes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: true,
            savedHoroscopes: []
         }
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('https://myzodiac.herokuapp.com/horoscopes');
            this.setState({savedHoroscopes: response.data, isLoading: false});
        } catch(e) {
            console.log(e);
        }
    }

    deleteHoroscopes = async (id) => {
        const {savedHoroscopes} = this.state;
        try {
            const deleted = await axios.delete(`https://myzodiac.herokuapp.com/horoscopes/${id}`, savedHoroscopes, {headers: { 'Access-Control-Allow-Origin': 'DELETE' }})
            let deletedHoroscopes = [...this.state.savedHoroscopes].filter(i => i.id !== id)
            this.setState({savedHoroscopes: deletedHoroscopes})
            console.log(deleted.data);
        } catch (e) {
            console.log(e)
        }
    }

    render() { 

        const {isLoading} = this.state;
        if (isLoading) {
            return <h1> Loading . . . </h1>
        }

        return ( 
            <div className='saved' >
                <h1> My Horoscopes </h1>
                {this.state.savedHoroscopes.map(horoscope => (
                    <div className='myhoros' >
                        <h2 key={horoscope.id} > {horoscope.horoscopes} </h2>
                        <button onClick={() => this.deleteHoroscopes(horoscope.id)} > Delete </button>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default MyHoroscopes;