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
          <li>
            <Link to='/packages'>
              Packages
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
