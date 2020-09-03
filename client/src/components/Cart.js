// Filler data for cart.js
import React from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart:[]
        }
    }    
       
    render() {
        return (
            <div className='cart-container'>
                
                <div >
                {this.state.items}  No! Don't look!
                
                
                </div>
            </div>
        )
                
    }
}

export default Cart;