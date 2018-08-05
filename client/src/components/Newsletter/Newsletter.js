import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import isEmail from 'validator/lib/isEmail';

import './Newsletter.css';

class Newsletter extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addPerson = this.addPerson.bind(this);

    this.notificationSystem = React.createRef();
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  addPerson() {
    const { email } = this.state;

    if (isEmail(email)) {
      axios.post('/api/newsletter', {
        email,
      });
  
      this.showNotification();
    } else {
      this.notificationSystem.current.addNotification({
        title: 'Error',
        message: 'Please enter an email address',
        level: 'error',
        position: 'bc',
      })
    }

  }

  showNotification() {
    this.notificationSystem.current.addNotification({
      title: 'Welcome',
      message: 'Thanks, you have been added to our list!',
      level: 'success',
      position: 'bc',
    })

    this.setState({ email: '' })
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
          <NotificationSystem ref={this.notificationSystem} />
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
