import React, {Component} from 'react';

// props need change handler funcions for the form and the three buttons
class NavBar extends component{
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
                    <button><link>Browse Cars</link></button>
                    <button>Cart</button>
                    <button>Sign In</button>
                </div>
            </div>
        )
    }
}
    

export default NavBar;