import React from 'react';
import {Link} from 'react-router-dom';

const {items} = [
    {name: '', price: 'a', description: 'a1', picture:'$ a.aa '},
    {id: 3, make: 'b', model: 'b1', price:'$b.bb ' },
    {id: 2, make: 'c', model: 'c1', price:'$ c.cc' }
]; 

class AllItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items:[]
        }
    };
async componentDidMount() {

            const response = await fetch('./items')
            const data =await response.json()
            const itemLinks = data.map((items, i)=> <li><Link key={i} to={{pathname:'/test', }}>(items.name)</Link></li>)
   this.setState({
       items: 'itemLinks'
   }) 
}
render() {
    return (
         <ul>
         {this.state.items} item show up!
         {console.log(this.state.items)}
        </ul>
        );
     }
}
export default AllItems