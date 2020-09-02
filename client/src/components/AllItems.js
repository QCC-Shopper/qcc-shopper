import React from 'react';
import {Link} from 'react-router-dom';


class AllItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items:[]
        }
    };
async componentDidMount() {
        const response = await fetch('./items');
        const data = await response.json();
        this.setState({
            items: data,
        }) 
}
//const itemLinks = data.v)
render() {
    return (
        <div className="car-images">
            {this.state.items.map((item, i)=> <img src={item.imageUrl}></img>)}
            {this.state.items.map((item, i)=> <Link key={i} to={{pathname:'/test'}}>{item.name}</Link>)}
        </div>
        );
     }
}
 export default AllItems;