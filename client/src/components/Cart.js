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
                {this.state.items}  
                .Logo {
                  background-image: url(https://i0.kym-cdn.com/photos/images/facebook/001/315/909/a9f.jpg);
                }
                "Don't look!"
                </div>)
            </div>
        )
                
    }
}

export default Cart;