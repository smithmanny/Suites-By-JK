import React, { Component } from 'react';
import Link from 'gatsby-link';

import Logo from '../imgs/logo.png';

class Header extends Component {
  render() {
    return (
      <nav id="nav">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/about" className="blue">
              Meet The Owners
            </Link>
          </li>
          <li>
            <Link to="/packages" className="purple">
              Packages
            </Link>
          </li>
          <li>
            <Link to="/contact" className="green">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
