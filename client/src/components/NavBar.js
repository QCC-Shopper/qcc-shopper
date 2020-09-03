import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render() {
        return(
            <div className='navbar'>
                
                <h1>LeetRide</h1>
                <form className='searh-form'>{/*this part is where user can search for the products that are available on the ecomerce website*/}
                    <input type='text' placeholder='Find your ride'/>
                    <button type='submit'>Search</button>
                </form>
                
                <div className='btn-navbar'>
                    <Link to='/cars'>{/*This link takes user to the home page where all the cars are listed*/}
                        Browse Cars
                    </Link>
                    <Link to='/cart'>{/*This link takes user to the cart component where all the cars that they selected and the price wil appear*/}
                        Cart
                    </Link>
                    <Link to='/login'>{/*This link takes user to the login page where the user can connect to out community*/}
                        Sign In
                    </Link>
                </div>

            </div>
        )
    }
}


export default NavBar;