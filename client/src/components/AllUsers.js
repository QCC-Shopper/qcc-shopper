import React from 'react'
import {Link} from 'react-router-dom'

export default class AllUsers extends React.Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('/user')
            const data = await response.json()
            const userLinks = data.map((user, i) => <Link key={i} to={{pathname:'/user', query:{id: user.id.toString()}}}>{user.name}</Link>)                                      
            this.setState({
                users: userLinks
            })
        } catch(er) {console.log(er)}
    }

    render() {
        return (
            <div className='users-div-main'>
                    {this.state.users}
            </div>
        )
    }
}