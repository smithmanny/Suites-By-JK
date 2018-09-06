import React, { Component } from 'react';
import Link from 'gatsby-link';

import styles from '../stylesheets/header.module.scss';
import Logo from '../imgs/logo.png';

const Header = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <ul>
      <li>
        <Link to="/about" className={styles.blue}>
          Meet The Owners
        </Link>
      </li>
      <li>
        <Link to="/packages" className={styles.purple}>
          Packages
        </Link>
      </li>
      <li>
        <Link to="/contact" className={styles.green}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
