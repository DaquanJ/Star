import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                <form className='login' >
                    <input type="text" placeholder="User Name"/>
                    <input type="password" placeholder="Password" />
                    <button type="submit" > Login </button>
                </form>
                <Link id='no-account' to='/signup' > Don't have an account? Sign up </Link>
            </div>
         );
    }
}
 
export default Login;