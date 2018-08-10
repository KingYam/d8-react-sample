import React, { Component } from 'react';
import Features from './components/Features'
import logo from './logo.svg';
import drupalLogo from './drupal-8-logo.svg';
import plus from './white-plus-hi.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="images">
            <img src={drupalLogo} className="Drupal-logo" alt="d8 logo" />
            <img src={plus} className="Plus-sign" alt="plus" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">Features</h1>
        </header>
        <Features />
      </div>
    );
  }
}

export default App;
