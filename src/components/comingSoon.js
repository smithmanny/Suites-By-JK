import React, { Component } from 'react';

import Newsletter from './newsletter';

class ComingSoon extends Component {
  render() {
    return (
      <div>
        <h3>Be Ready, We Are Lanching Soon.</h3>
        <h1 className="company-name">Suites By JK</h1>
        <Newsletter text="" />
      </div>
    );
  }
}

export default ComingSoon;
