import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="logo">Logo Goes Here</div>
        <ul>
          <li>
            <Link to='/about'>
              Meet The Owners
            </Link>
          </li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
