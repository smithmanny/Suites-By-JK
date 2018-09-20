import React from 'react';

import styles from '../stylesheets/footer.module.scss';
import Newsletter from './newsletter';
import Mail from '../imgs/mail.svg';
import Facebook from '../imgs/facebook.svg';
import Instagram from '../imgs/instagram.svg';

const Footer = () => (
  <footer>
    <div className={styles.footer}>
      <section>
        <div>
          <Newsletter text="Get Rewards" footer />
        </div>

        <div className={styles.footerSocial}>
          <h2>Social</h2>
          <ul>
            <li>
              <a href="mailto:suitesbyjk@gmail.com">
                <img src={Mail} alt="Twitter" />
              </a>
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
