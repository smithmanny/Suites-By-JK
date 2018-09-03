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
              <a href="https://www.facebook.com/byJKllc/?ref=search" rel="noopener noreferrer" target="_blank">
                <img src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/byjk_llc/" rel="noopener noreferrer" target="_blank">
                <img src={Instagram} alt="Instagram" />
              </a>
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
