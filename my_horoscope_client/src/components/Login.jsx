import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            password: ''
         }
    }

    render() { 
        return ( 
            <div className='page' >
            <div id='signs'>
                <img src="/assets/2000px-Libra.svg.png" alt="signs"/>
            </div>
            <div className='login-page' >
                <form className='login' >
                    <input type="text" placeholder="User Name"/>
                    <input type="password" placeholder="Password" />
                    <button type="submit" > Login </button>
                </form>
                <Link id='no-account' to='/signup' > <p> Don't have an account? Sign up </p>  </Link>
            </div>
            </div>
         );
    }
}
 
export default Login;