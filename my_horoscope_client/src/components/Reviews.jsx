import React, { Component } from 'react';
import axios from 'axios';


class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reviews: {
                userName: '',
                review: ''
            }
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        let reviews = {...this.state.reviews};
        reviews[name] = value;
        this.setState({reviews});
    }

   async handleSubmit(e) {
        e.preventDefault();
        const {reviews} = this.state;
        try {
            const newReview = await axios.post('/reviews', reviews)
            console.log(newReview.data);
        } catch (e) {
            console.log(e);
        }
        console.log(this.state.reviews);
    }

    render() { 
        const {reviews} = this.state;
        return ( 
            <div>
                <form onSubmit = {this.handleSubmit} >
                    <input type="text" placeholder="User Name (Optional)" name="userName" value={reviews.userName || ''} onChange = {this.handleChange} />
                    <input type="text" placeholder="Review" name="review" value={reviews.review || ''} onChange = {this.handleChange} />
                    <button> Submit Review ! </button>
                </form>
            </div>
         );
    }
}
 
export default Reviews;