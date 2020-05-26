import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            userName: '',
            sign: '',
            password: ''
         }
    }
    render() { 
        return ( 
            <div>
                <form >
                    <input type="email" placeholder="Email" onChange = {e => this.setState({email: e.target.value})} />
                    <input type="text" placeholder="User Name" onChange = {e => this.setState({userName: e.target.value})} />
                    <input type="text" placeholder="Sign" onChange = {e => this.setState({sign: e.target.value})} />
                    <input type="password" placeholder="Password" onChange = {e => this.setState({password: e.target.value})} />
                    <button type="submit" > Sign Up! </button>
                </form>
            </div>
         );
    }
}
 
export default Signup;