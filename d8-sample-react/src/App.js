import React, { Component } from 'react';
import Features from './components/Features'
import Header from './components/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
      </div>
    );
  }
}

export default App;
