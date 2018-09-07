import React from 'react';

import styles from '../stylesheets/footer.module.scss';
import Newsletter from './newsletter';
import Twitter from '../imgs/twitter.png';
import Facebook from '../imgs/facebook.png';
import Instagram from '../imgs/instagram.png';

const Footer = () => (
  <footer>
    <div className={styles.footer}>
      <section>
        <div>
          <Newsletter text="Get Rewards" padding="0 30px" />
        </div>

        <div className={styles.footerSocial}>
          <h2>Social</h2>
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

      <section className={styles.footerCopyright}>&copy; 2018 Suites By JK</section>
      <small className={styles.footerCredit}>
        Developed by{' '}
        <a href="https://shakhorsmith.com" target="_blank" rel="noopener noreferrer">
          Shakhor Smith
        </a>
      </small>
    </div>
  </footer>
);

export default Footer;
