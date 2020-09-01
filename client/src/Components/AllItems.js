import React from 'react';
import {Link} from 'react-router-dom';


const {items} = [
    {id: 1, make: 'a', model: 'a1', price:'$ a.aa' },
    {id: 3, make: 'b', model: 'b1', price:'$b.bb ' },
    {id: 2, make: 'c', model: 'c1', price:'$ c.cc' }

]; 

class AllItems extends React.Component {
    constructor() {
        super()
        this.state = {
            items:[]
    };
}       
   


async showItems(){
    console.log(AllItems);
        const response = await fetch('./items')
        const data =await response.json()
        // const itemLinks = data.map((items, i)=> <Link key={i} to={{pathname:'/test', query:{id: useReducer.id.toString()}}}>(items.name)</Link>)
        const itemLinks= data
        this.ListeningStateChangedEvent({
            items: itemLinks
        }
    )
    
}
    render() {
    return (
        <div className="items-div-main"> 
                <span className={this.state.items()}>Item List</span>
            <header className= "">
                <h1 className="App-title"> All Items</h1>
            </header>
        <ul>Item1</ul>
        <ul>Item2</ul>
        </div>
        );
    }
}
// export default AllItems;