import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/horoscope.css';

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <div className='page' >
                {/* <h1> Your Star </h1> */}
                <div id='signs'>
                    <img src="https://static.wixstatic.com/media/e6f9d7_1cf63a10d9124730b66cfb48e7683a83~mv2.png/v1/fill/w_504,h_508,al_c,q_85,usm_0.66_1.00_0.01/Zodiac%20Wheel.webp" alt="signs" />
                </div>
                <div className='sign-page' >
                    <form onChange={(e) => this.handleChange(e)} className='sign-input' >
                        <input id='sign' type="text" placeholder="Tell us your sign, then press enter . . ." required />
                        <Link id='horoscope' to={`/horoscope/${this.state.sign}`} > <input style={{ display: 'none' }} type="submit" value="Find out your Horoscope" /> </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Sign;