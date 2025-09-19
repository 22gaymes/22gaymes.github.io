import React from 'react';
import logo from './22gameslogored.svg';
import './App.css';
import { Input } from 'rsuite';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input></Input>
      </header>
    </div>
  );
}

export default App;
