import React, { Component } from 'react';
import Features from './components/Features'
import Header from './components/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="info">
          <p>This is an example of a headless Drupal 8 integration that feeds data into components within a React application.</p>
          <p>
            Users can create a new feature, as well as edit the feature image, feature title, and feature body within the Drupal 8 backend integration. The data is accessed by the React frontend via Rest API Export (using a Drupal View) and passed through a Features component to individual Feature components to be rendered.
          </p>
          <p>
            Data live-reloads from the D8 integration every 30 seconds.
          </p>
        </div>
        <Features />
      </div>
    );
  }
}

export default App;
