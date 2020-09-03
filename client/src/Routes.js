import React from 'react'
import {Route, Switch} from 'react-router-dom'
// Single user imports Here
// import SingleUser from './components/SingleUser.js'
// NavBar imports here
import NavBar from './components/NavBar.js'
// AllUsers imports here
import AllUsers from './components/AllUsers.js'
// AllItems imports here
import AllItems from './components/AllItems.js'
import AddUser from './components/AddUser.js'
import Login from './components/Login.js'
import SingleItem from './components/Login.js'
import SingleUser from './components/SingleUser.js'
import Cart from './components/Cart.js'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/user' component={SingleUser}/>
                <Route path='/NavBar' component={NavBar}/>
                <Route path='/AllUsers' component={AllUsers}/>
                <Route path='/cars' component={AllItems}/>
                <Route path='/sign_up' component={AddUser}/>
                <Route path='/Login' component={Login}/>
                <Route path='/SingleItem' component={SingleItem}/>
                <Route path='/Cart' component={Cart}/>
            </Switch>
        )
    }
}

export default Routes