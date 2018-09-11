import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import NotificationSystem from 'react-notification-system';

class BookModal extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    number: '',
    package: this.props.title,
    modalIsOpen: false,
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleSubmit = e => {
    e.preventDefault();

    const quote = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      message: this.state.message,
      packageName: this.state.package,
    });

    axios
      .post('/.netlify/functions/sendEmail', quote)
      .then(() => {
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
          open={this.state.modalIsOpen}
          onClose={this.closeModal}
          center
          showCloseIcon={false}
          styles={{
            modal: {
              width: '100%',
            },
          }}
        >
          <h2>{title}</h2>
          <form name="clients" method="post" onSubmit={this.handleSubmit}>
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
