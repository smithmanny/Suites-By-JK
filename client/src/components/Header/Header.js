import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="logo">Logo Goes Here</div>
        <ul>
          <li>Meet The Owners</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
