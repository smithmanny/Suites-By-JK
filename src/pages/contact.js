import React from 'react';
import { navigateTo } from 'gatsby-link';
import NotificationSystem from 'react-notification-system';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Contact = () => (
  <div className="wrapper">
    <div className="section">
      <h1 className="sectionTitle">Get In Touch</h1>
      <Form />
    </div>
  </div>
);

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        navigateTo(form.getAttribute('action'));

        this.showNotification();
      })
      .catch(() => {
        this.notificationSystem.addNotification({
          title: 'Error',
          message: 'Sorry, there was a problem',
          level: 'error',
          position: 'bc',
        });
      });
  };

  showNotification() {
    this.notificationSystem.addNotification({
      title: 'Sent',
      message: 'Thanks, your message has been sent',
      level: 'success',
      position: 'bc',
    });

    this.setState({
      email: '',
      name: '',
      message: '',
    });
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="formName" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>

        <div className="formContent">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
        </div>
        <div className="formContent">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
        </div>
        <div className="formContent">
          <label htmlFor="message">Message</label>
          <textarea type="text" name="message" onChange={this.handleChange} value={this.state.message} />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
        <NotificationSystem ref={el => (this.notificationSystem = el)} />
      </form>
    );
  }
}

export default Contact;
