import React from 'react';
import logo from '../logo.svg';
import drupalLogo from '../drupal-8-logo.svg';
import plus from '../white-plus-hi.png';

const Header = () => (
		<header className="App-header">
          <div className="images">
            <img src={drupalLogo} className="Drupal-logo" alt="d8 logo" />
            <img src={plus} className="Plus-sign" alt="plus" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">Features</h1>
        </header>
);

export default Header;