import React from 'react'
import {Route, Switch} from 'react-router-dom'
// Single user imports Here
import SingleUser from './components/SingleUser.js'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/user' component={SingleUser}/>
            </Switch>
        )
    }
}

export default Routes;