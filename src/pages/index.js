import React from 'react';
import { Fade } from 'react-slideshow-image';

import Newsletter from '../components/newsletter';
import Slide2 from '../imgs/pic2.jpg';
import Slide3 from '../imgs/pic3.jpg';

const images = [Slide2, Slide3];

const IndexPage = () => (
  <div className="wrapper">
    <Fade images={images} duration={5000} transitionDuration={1000} />

    <section className="quote-wrapper">
      <p className="quote">Enjoy the ultimate experience at your front door</p>
    </section>

    <section className="section">
      <h2 className="section-title">Services</h2>

      <div className="services-wrapper">
        <div className="left-service">
          <ul>
            <li>
              So You Think You Can Sing <span className="divider">|</span>
              <span className="package-type"> Karaoke</span>
            </li>
            <li>
              All Access <span className="divider">|</span>
              <span className="package-type"> VIP Kids</span>
            </li>
            <li>The Day Camp</li>
            <li>Pampered Princess</li>
          </ul>
        </div>

        <div className="right-service">
          <ul>
            <li>Bridal Transportation</li>
            <li>
              The Glow Up <span className="divider">|</span>
              <span className="package-type"> Kids Glow Party</span>{' '}
            </li>
            <li>
              Sip and Dip <span className="divider">|</span>
              <span className="package-type"> Paint Party</span>
            </li>
            <li>Stylist Buyout</li>
          </ul>
        </div>
      </div>
    </section>
    <Newsletter />
  </div>
);

export default IndexPage;
