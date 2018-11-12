import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
          <h1>Assignment 1 - Base Syntax</h1>
        </head>
        <body>
          <UserInput />
        </body>
      </div>
    );
  }
}

export default App;
