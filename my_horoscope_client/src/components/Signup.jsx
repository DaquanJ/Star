import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {
                email: '',
                userName: '',
                sign: '',
                password: ''
            }
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let user = {...this.state.user};
        user[name] = value;
        this.setState({user});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {user} = this.state;
        try {
            const response = await axios.post('/users', user,{headers: { 'Access-Control-Allow-Origin': 'POST' }})
            console.log(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    render() { 
        const {user} = this.state;
        return ( 
            <div className='page' >
                <div id='signs'>
                <img src="/assets/2000px-Libra.svg.png" alt="signs"/>
                </div>
            <div className='signup-page' >
                <form className='signup' onSubmit = {this.handleSubmit} >
                    <input type="email" placeholder="Email" name="email" value={user.email || ''} onChange={this.handleChange} />
                    <input type="text" placeholder="User Name" name="userName" value={user.userName || ''} onChange={this.handleChange} />
                    <input type="text" placeholder="Sign" name="sign" value={user.sign || ''} onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" value={user.password || ''} onChange={this.handleChange} />
                    <button type="submit" > Sign Up! </button>
                </form>
                <Link id='yes-account' to='/' > <p> Already have an account? Log in </p>  </Link>
            </div>
            </div>
         );
    }
}
 
export default Signup;