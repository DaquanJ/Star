import React, { Component } from 'react';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            savedHoroscope: {
                horoscope: ''
            }
         };
    }
    
    render() { 
        return ( 
            <div>
                <button> Save </button>
            </div>
         );
    }
}
 
export default Button;