import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    constructor(props){
        super(props);
        
    }

    //will modify to make search possible.
    render() {
        return(
            <div className='navbar'>
                <h1>LeetRide</h1>
    
                <form className='searh-form'>
                    <input type='text' placeholder='Find your ride'/>
                    <button type='submit'>Search</button>
                </form>
                
                <div className='btn-navbar'>
                    <Link to='/cars'>
                        Browse Cars
                    </Link>
                    <Link to='/cart'>
                        Cart
                    </Link>
                    <Link to='/login'>
                        Sign In
                    </Link>
                </div>
            </div>
        )
    }
}


export default NavBar;