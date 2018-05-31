import React, { Component } from 'react'
import './Newsletter.css'

class Newsletter extends Component {
  constructor() {
    super()

    this.state = {
      newsletterInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ newsletterInput: e.target.value })
  }

  render() {
    return (
      <div className='wrapper newsletter-container'>
        <h4 className="section-title">Subscribe To Our Newsletter</h4>

        <div className='newsletter-wrapper'>
          <input 
            className="newsletter-input"
            type="email" 
            name="email" 
            placeholder='Enter your email'
            onChange={this.handleChange}
            value={this.state.newsletterInput}
            />

            <button className='newsletter-btn'>Subscribe</button>
        </div>
      </div>
    )
  }
}

export default Newsletter;
