import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import NotificationSystem from 'react-notification-system';
import isEmail from 'validator/lib/isEmail';

class Newsletter extends Component {
  state = {
    email: '',
  };

  handleChange = e => {
    this.setState({ email: e.target.value });
  };

  addPerson = e => {
    e.preventDefault();

    const { email } = this.state;

    if (isEmail(email)) {
      addToMailchimp(email).then(data => {
        if (data.result === 'error') {
          this.notificationSystem.addNotification({
            title: 'Error',
            message: data.msg,
            level: 'error',
            position: 'bc',
          });
        } else {
          this.showNotification(data);
          this.setState({ email: '' });
        }
      });
    } else {
      this.notificationSystem.addNotification({
        title: 'Error',
        message: 'Please enter an email address',
        level: 'error',
        position: 'bc',
      });
    }
  };

  showNotification(cb) {
    this.notificationSystem.addNotification({
      title: cb.result,
      message: cb.msg,
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
