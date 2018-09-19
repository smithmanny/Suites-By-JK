import React from 'react';

import styles from '../stylesheets/about.module.scss';
import Newsletter from '../components/newsletter';
import Owners from '../imgs/pic2.jpg';

const About = () => (
  <div className="wrapper">
    <section className="section">
      <h2 className="sectionTitle">Meet The Owners</h2>
      <p className={styles.owners}>
        Meet the J and the K of Suites By JK! Jakkera Alan Ellison and Khadijah Cottle always knew once the time was
        right that destiny would lead them into the right direction. They always knew they wanted to create unique
        events for all ages, they just didn’t think they would be so fantastic! Jakkera and Khadijah have known one
        another all of their lives, so their bond makes for a fun environment it’s never a dull moment with the two of
        them! What one lacks the other brings to the table. We hope you enjoy them as much as they enjoy one another!
      </p>
    </section>

    <div className={styles.aboutImg}>
      <img src={Owners} alt="Owners Of JK" />
    </div>

    <section className="section">
      <h2 className="sectionTitle">About Us</h2>
      <p>
        Suites By JK allows you to turn our party bus into your own unique venue. Our goal is to provide you with the
        ultimate experience right at your front door. Suites By JK provides you with a mobile party service for all
        ages.
      </p>
    </section>

    <Newsletter />
  </div>
);

export default About;
