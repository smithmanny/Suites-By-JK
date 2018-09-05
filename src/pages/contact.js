import React from 'react';
import { navigateTo } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Contact = () => (
  <div className="wrapper">
    <div className="section">
      <h2 className="section-title">Get In Touch</h2>
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
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>

        <div className="form-content">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
        </div>
        <div className="form-content">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
        </div>
        <div className="form-content">
          <label htmlFor="message">Message</label>
          <textarea type="text" name="message" onChange={this.handleChange} value={this.state.message} />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Contact;
