import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import './Footer.css';
import Twitter from '../../img/twitter.png';
import Facebook from '../../img/facebook.png';
import Instagram from '../../img/instagram.png';

const Footer = () => (
  <footer>
    <div className="footer">
      <section className="footer-content">
        <div className="footer-newsletter">
          <Newsletter text="Get Rewards" padding="0 30px" />
        </div>
        <div className="footer-social">
          <h2 className="section-title">Social</h2>

          <ul>
            <li>
              <img src={Twitter} alt="Twitter" />
            </li>
            <li>
              <img src={Facebook} alt="Facebook" />
            </li>
            <li>
              <img src={Instagram} alt="Instagram" />
            </li>
          </ul>
        </div>
      </section>

      <section className="footer-copyright">&copy; 2018 Suites By JK</section>
    </div>
  </footer>
);

export default Footer;
