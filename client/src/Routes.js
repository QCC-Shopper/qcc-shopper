import React from 'react'
import {Route, Switch} from 'react-router-dom'
// Single user imports Here
// import SingleUser from './components/SingleUser.js'
// NavBar imports here
import NavBar from './components/NavBar.js'
// AllUsers imports here
import AllUsers from './components/AllUsers.js'
// AllItems imports here
// import AllItems from './components/AllItems.js'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                {/* <Route path='/user' component={SingleUser}/> */}
                <Route path='/NavBar' component={NavBar}/>
                <Route path='/AllUsers' component={AllUsers}/>
                {/* <Route path='/AllItems' component={AllItems}/> */}
            </Switch>
        )
    }
}

export default Routes