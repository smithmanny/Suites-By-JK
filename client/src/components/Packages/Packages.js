import React, { Component } from 'react';
import Package from './Package';
import {packageContent} from './ListOfPackages';
// Assets
import './Package.css';

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

        {packageContent.packages.map((data, i) => <Package data={data} key={i} />)}

      </div>
    );
  }
}

export default Packages;