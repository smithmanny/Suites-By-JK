import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Newsletter from '../Newsletter/Newsletter';
// Assets
import Slide1 from '../../img/pic1.jpg';
import Slide2 from '../../img/pic2.jpg';
import Slide3 from '../../img/pic3.jpg';
import './Landing.css';

const images = [
  Slide1,
  Slide2,
  Slide3
]

class Landing extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Fade
          images={images}
          duration={5000}
          transitionDuration={1000}
        />

        <section className="quote-wrapper">
          <p className='quote'>Enjoy the ultimate experience at your front door</p>
        </section>

        <section className="section">
          <h2 className="section-title">Services</h2>

          <div className="services-wrapper">
            <div className="left-service">
              <ul>
                <li>So You Think You Can Sing (Karaoke)</li>
                <li>All Access (VIP Kids)</li>
                <li>The Day Camp</li>
                <li>Pampered Princess</li>
              </ul>
            </div>

            <div className="right-service">
              <ul>
                <li>Bridal Transportation</li>
                <li>The Glow Up (Kids Glow Party)</li>
                <li>Sip and Dip (Paint Party)</li>
                <li>Stylist Buyout</li>
              </ul>
            </div>
          </div>
        </section>
        <Newsletter />
      </div>
    );
  }
}

export default Landing;
