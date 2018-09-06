import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import isEmail from 'validator/lib/isEmail';

import styles from '../stylesheets/global/index.module.scss';

class Newsletter extends Component {
  state = {
    email: '',
  };

  handleChange = e => {
    this.setState({ email: e.target.value });
  };

  addPerson = () => {
    const { email } = this.state;

    if (isEmail(email)) {
      axios.post('/api/newsletter', {
        email,
      });

      this.showNotification();
    } else {
      this.notificationSystem.addNotification({
        title: 'Error',
        message: 'Please enter an email address',
        level: 'error',
        position: 'bc',
      });
    }
  };

  showNotification() {
    this.notificationSystem.addNotification({
      title: 'Welcome',
      message: 'Thanks, you have been added to our list!',
      level: 'success',
      position: 'bc',
    });

    this.setState({ email: '' });
  }

  render() {
    return (
      <div className="newsletterContainer" style={{ padding: this.props.padding }}>
        <h2>{this.props.text}</h2>

        <div className="newsletterWrapper">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <button onClick={this.addPerson}>Subscribe</button>
          <NotificationSystem ref={el => (this.notificationSystem = el)} />
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
