import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Newsletter.css';

class Newsletter extends Component {
  constructor() {
    super();

    this.state = {
      newsletterInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ newsletterInput: e.target.value });
  }

  render() {
    return (
      <div className="newsletter-container" style={{ padding: this.props.padding }}>
        <h2 className="section-title">{this.props.text}</h2>

        <div className="newsletter-wrapper">
          <input
            className="newsletter-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={this.handleChange}
            value={this.state.newsletterInput}
          />

          <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>
    );
  }
}

Newsletter.defaultProps = {
  padding: '30px',
  text: 'Subscribe To Our Newsletter',
};

Newsletter.propTypes = {
  padding: PropTypes.number,
  text: PropTypes.string,
};

export default Newsletter;
