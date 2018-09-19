import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is the landing page of the application. Welcome 

          <h2>Aseem Jain is one of the best programmer. </h2>
        </p>
      </div>
    );
  }
}

export default App;
