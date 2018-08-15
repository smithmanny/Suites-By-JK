import React from 'react';

import Newsletter from './newsletter';
import Twitter from '../imgs/twitter.png';
import Facebook from '../imgs/facebook.png';
import Instagram from '../imgs/instagram.png';

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
      <small className="footer-credit">Developed by Shakhor Smith</small>
    </div>
  </footer>
);

export default Footer;
