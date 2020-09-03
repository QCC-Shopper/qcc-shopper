import React from 'react';
import logo from './logo.svg';
import AllUsers from './components/AllUsers'
import Routes from './Routes'
import './App.css';
import NavBar from './components/NavBar';
import AllItems from './components/AllItems';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <hr/>
      <AllItems/>
    </div>
  );
}

export default App;
