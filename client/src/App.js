import React, {Component} from 'react';
import Students from './Students';
import NavBar from './NavBar';


class App extends Component{
  constructor(){
    super();
    this.state = {
      item: []
    }
  }

  
  render(){
  return(
    <div className='container'>
      <NavBar/>
    </div>
  )
}
}


export default App;
