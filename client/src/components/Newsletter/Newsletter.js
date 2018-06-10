import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Newsletter.css';

class Newsletter extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPerson = this.addPerson.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  addPerson() {
    const { email } = this.state;

    axios.post('/api/newsletter', {
      email,
    });
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
            value={this.state.email}
          />

          <button className="newsletter-btn" onClick={this.addPerson}>
            Subscribe
          </button>
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
  padding: PropTypes.string,
  text: PropTypes.string,
};

export default Newsletter;
