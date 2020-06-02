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

    

    componentDidMount = async () => {
        try {
            const today = await axios.post(`https://aztro.sameerkumar.website?sign=libra&day=${this.state.day}`)
            this.setState({horoscope: today.data, horoscopes: today.data.description, isLoading: false})
        } catch (e) {
            console.log(e);
        }
    }

    getHoroscope = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://aztro.sameerkumar.website?sign=libra&day=${this.state.day}`);
            this.setState({horoscope: response.data, horoscopes: response.data.description});
        } catch (e) {
            console.log(e);
        }
    }

    saveHoroscope = async () => {
       let newHoroscope = {"horoscopes": this.state.horoscopes};
       try {
            
           const savedHoroscope = await axios.post('https://cors-anywhere.herokuapp.com/https://myzodiac.herokuapp.com/horoscopes', newHoroscope)
           console.log(savedHoroscope.data);
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
            <div className='your-star' >
                <form className='days' onSubmit={this.getHoroscope} >
                    <input type="submit" value='Yesterday' onClick={() => this.setState({day:'yesterday'})} />
                    <input type="submit" value='Today' onClick={() => this.setState({day:'today'})} />
                    <input type="submit" value='Tomorrow' onClick={() => this.setState({day:'tomorrow'})} />
                </form>
                    <div className='zodiac' > 
                    <div>
                        <h1> {this.state.horoscope.current_date} </h1>
                    </div>
                    <div>
                        <p> {this.state.horoscope.description} </p>
                    </div>
                    <div>
                        <button onClick={this.saveHoroscope} > Save ! </button>
                    </div>
                    <div>
                        <p> Compatibility: {this.state.horoscope.compatibility} </p>
                    </div>
                    <div>
                        <p> Mood: {this.state.horoscope.mood} </p>
                    </div>
                    <div>
                        <p> Color: {this.state.horoscope.color} </p>
                    </div>
                    <div>
                        <p> Lucky Number: {this.state.horoscope.lucky_number} </p>
                    </div>
                    <div>
                        <p> Lucky Time: {this.state.horoscope.lucky_time} </p>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default DailyHoroscope;