import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#___gatsby');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '400px',
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

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { title } = this.props;
    return (
      <div className="book-modal">
        <button className="btn" onClick={this.openModal}>
          Book Now
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>{title}</h2>
          <form>
            <div className="form-content">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name} />
            </div>
            <div className="form-content">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email} />
            </div>
            <div className="form-content">
              <label htmlFor="number">Number</label>
              <input type="number" name="number" id="number" onChange={this.onChange} value={this.state.number} />
            </div>
            <div className="form-content">
              <label htmlFor="message">Message</label>
              <input type="text" name="message" id="message" onChange={this.onChange} value={this.state.message} />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default BookModal;
