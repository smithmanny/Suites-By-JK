import React from 'react';
import Link from 'gatsby-link';
import { Fade } from 'react-slideshow-image';

import Newsletter from '../components/newsletter';
import Slide1 from '../imgs/kid.jpg';
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
              <Link to="/packages/so-you-think-you-can-sing">
                So You Think You Can Sing <span className="divider">|</span>
                <span className="package-type"> Karaoke</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/all-access">
                All Access <span className="divider">|</span>
                <span className="package-type"> VIP Kids</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/the-day-camp">The Day Camp</Link>
            </li>
            <li>
              <Link to="/packages/pampered-princess">Pampered Princess</Link>
            </li>
          </ul>
        </div>

        <div className="right-service">
          <ul>
            <li>
              <Link to="/packages/bridal-transportation">Bridal Transportation</Link>
            </li>
            <li>
              <Link to="/packages/the-glow-up">
                The Glow Up <span className="divider">|</span>
                <span className="package-type"> Kids Glow Party</span>{' '}
              </Link>
            </li>
            <li>
              <Link to="/packages/sip-and-dip">
                Sip and Dip <span className="divider">|</span>
                <span className="package-type"> Paint Party</span>
              </Link>
            </li>
            <li>
              <Link to="/packages/grown-ish">
                Grown-ish<span className="divider">|</span>
                <span className="package-type"> 21 and older</span>{' '}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Newsletter />
  </div>
);

export default IndexPage;
