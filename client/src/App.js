import React from 'react';
import logo from './logo.svg';
import AllUsers from './components/AllUsers'
import Routes from './Routes'
import './App.css';

import Items from "./Components/AllItems";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<<<<<<< HEAD
        <Items />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
=======
        <AllUsers />
        <Routes />
>>>>>>> fbe8345cab4e1f438b958f851c252644ab759dce
      </header>
    </div>
  );
}

export default App;
