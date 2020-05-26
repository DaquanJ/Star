import React, { Component } from 'react';

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
                <form >
                    <input type="text" placeholder="User Name"/>
                    <input type="password" placeholder="Password" />
                    <button type="submit" > Login </button>
                </form>
            </div>
         );
    }
}
 
export default Login;