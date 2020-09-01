import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className='navbar'>
                <h1>LeetRide</h1>
    
                <form className='searh-form'>
                    <input type='text' placeholder='Find your ride'/>
                    <button type='submit'>Search</button>
                </form>
    
                <div className='btn-navbar'>
                    <Link to='/user'>
                        <button type="button">Browse Cars</button>
                    </Link>
                    <Link to='/cart'>
                        <button type="button">Cart</button>
                    </Link>
                    <Link to='/login'>
                        <button type="button">Sign In</button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default NavBar;