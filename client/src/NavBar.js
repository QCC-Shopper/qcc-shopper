import React, {Component} from 'react';

// props need change handler funcions for the form and the three buttons
const NavBar = (props) => {
    return(
        <div className='navbar'>
            <h1>LeetRide</h1>

            <form className='searh-form'>
                <input type='text' placeholder='Find your ride'/>
                <button type='submit'>Search</button>
            </form>

            <div className='btn-navbar'>
                <button>Browse Cars</button>
                <button>Cart</button>
                <button>Sign In</button>
            </div>
            

        </div>
    )
}

export default NavBar;