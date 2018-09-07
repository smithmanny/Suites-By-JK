import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import Modal from 'react-modal';
import NotificationSystem from 'react-notification-system';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

Modal.setAppElement('#___gatsby');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '500px',
    transform: 'translate(-50%, -50%)',
  },
};

class BookModal extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    number: '',
    modalIsOpen: false,
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

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
      message: 'Thanks, we received your quote',
      level: 'success',
      position: 'bc',
    });

    this.setState({
      email: '',
      name: '',
      number: '',
      message: '',
    });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#ED6EAE';
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { title } = this.props;
    return (
      <div className="bookModal">
        <button className="btn" onClick={this.openModal}>
          Book Now
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={title}
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>{title}</h2>
          <form
            name="clients"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="formName" value="clients" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <div className="formContent">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name} required />
            </div>
            <div className="formContent">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.handleChange} value={this.state.email} required />
            </div>
            <div className="formContent">
              <label htmlFor="number">Number</label>
              <input type="number" name="number" onChange={this.handleChange} value={this.state.number} required />
            </div>
            <div className="formContent">
              <label htmlFor="message">Message</label>
              <textarea name="message" onChange={this.handleChange} value={this.state.message} required />
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
            <NotificationSystem ref={el => (this.notificationSystem = el)} />
          </form>
        </Modal>
      </div>
    );
  }
}

BookModal.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BookModal;
