import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className="section">
          <h1 className="section-title">Contact Us</h1>

          <form className='section'>
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="message">Message</label>
              <textarea type="text" name="message" />
            </div>
            <button className='btn'>Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;