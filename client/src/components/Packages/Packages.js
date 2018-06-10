import React, { Component } from 'react';
// Assets
import './Package.css';
import Image from '../../img/pic1.jpg';

class Packages extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="section">
          <h2 className="section-title">Packages</h2>
          <small id="packages__travel-fee">
            *There will be an extra $50 traveling fee 30 miles outside of Atlanta area.{' '}
          </small>
        </div>

        <section className="packages__container">
          <div className="packages__wrapper">
            <div className="packages__content">
              <h3 className="packages__title">
                So You Think You Can Sing <span className="divider">|</span>{' '}
                <span className="package-type">Karaoke</span>
              </h3>
              <ul>
                <li>2 hour time limit</li>
                <li>Karaoke</li>
                <li>Drinks (Coke products and water)</li>
                <li>Lite snacks</li>
                <li>Party picture</li>
                <li>Strobe lights</li>
                <li>Complete setup and cleanup</li>
                <li className="package-price">
                  $300 - <span className="packages__guest">6 Guests</span>
                </li>
                <li className="package-price">
                  $350 - <span className="packages__guest">8 Guests</span>
                </li>
              </ul>
            </div>

            <div className="packages__img">
              <img src={Image} alt="Package1" />
            </div>
          </div>

          <button className="btn">Book Now</button>
        </section>
      </div>
    );
  }
}

export default Packages;
