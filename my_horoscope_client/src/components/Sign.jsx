import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

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
                <div id='signs'>
                    <img src="/assets/2000px-Libra.svg.png" alt="signs" />
                </div>
                <div className='sign-page' >
                    <form onChange={(e) => this.handleChange(e)} className='sign-input' >
                        <input id='sign' type="text" placeholder="What is your sign ?" />
                    </form>
                    <Link id='horoscope' to={`/horoscope/${this.state.sign}`} > <p> Find out your Horoscope </p>  </Link>
                </div>
            </div>
        );
    }
}

export default Sign;