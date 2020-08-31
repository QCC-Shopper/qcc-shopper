import React from 'react';
import logo from './logo.svg';
import AllUsers from './components/AllUsers'
import SingleUser from "./components/SingleUser"
import Routes from './Routes'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AllUsers />
        <Routes />
      </header>
    </div>
  );
}

export default App;
