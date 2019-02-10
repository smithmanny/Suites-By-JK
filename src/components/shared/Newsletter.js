import React, { Component } from 'react'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import NotificationSystem from 'react-notification-system'
import isEmail from 'validator/lib/isEmail'

import Button from './Button'

export default class Newsletter extends Component {
  state = {
    email: '',
  };

  handleChange = e => {
    this.setState({ email: e.target.value })
  };

  _subscribe = e => {
    e.preventDefault()

    const { email } = this.state

    if (isEmail(email)) {
      addToMailchimp(email).then(data => {
        if (data.result === 'error') {
          this.notificationSystem.addNotification({
            title: 'Error',
            message: data.msg,
            level: 'error',
            position: 'bc',
          })
        } else {
          this.showNotification(data)
          this.setState({ email: '' })
        }
      })
    } else {
      this.notificationSystem.addNotification({
        title: 'Error',
        message: 'Please enter an email address',
        level: 'error',
        position: 'bc',
      })
    }
  };

  showNotification = cb => {
    this.notificationSystem.addNotification({
      title: cb.result,
      message: cb.msg,
      level: 'success',
      position: 'bc',
    })

    this.setState({ email: '' })
  }

  render () {
    return (
      <React.Fragment>
        <Title>Subscribe for discounts and more.</Title>
        <NewsletterWrapper>
          <NewsletterInput type="text" placeholder="Enter email" />
          <Button onClick={this._subscribe}>Sign up</Button>
          <NotificationSystem ref={el => (this.notificationSystem = el)} />
        </NewsletterWrapper>
      </React.Fragment>
    )
  }
}

const Title = styled.h3`
  text-align: center;
  margin-top: 50px;
`

const NewsletterInput = styled.input`
  border-radius: 20px;
  border: 1px solid rgba(183, 183, 183, 0.77);
  padding: 5px;
  flex: 1;
  margin-right: 10px;
`

const NewsletterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
  align-items: center;
`
