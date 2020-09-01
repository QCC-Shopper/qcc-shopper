import React, { Component, useReducer } from 'react'
import {Link} from 'react-router-dom'

export default class AllItems extends React.Component {
    constructor() {
        super()
        this.state = {
            items:[]
        }
    }
}
/*
async componentDidMount () {
    try {
        const response = await fetch('/items')
        const data =await response.json()
        const itemLinks = data.map((items, i)=> <Link key={i} to={{pathname:'/test', query:{id: useReducer.id.toString()}}}>(items.name)</Link>)
        this.ListeningStateChangedEvent({
            items: itemLinks
        })
    }  catch(er) {console.log(er)}
}
*/
class AllItems extends Component {
    render() {
        return (
        <div className="items-div-main"> 
                    {this.state.items}
            <header className= "">
                <h1 className="App-title"> All Items</h1>
            </header>
        </div>
        );
    }
}

export default AllItems;