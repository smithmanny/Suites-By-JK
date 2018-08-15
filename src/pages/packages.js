import React from 'react';
import Modal from 'react-modal';

import { packageContent } from '../ListOfPackages';
import Image from '../imgs/pic2.jpg';

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

const service = services => services.map((service, i) => <li key={i}>{service}</li>);

const packagePrice = info =>
  info.map((data, i) => (
    <li className="package-price" key={i}>
      ${data.price} - <span className="packages__guest">{data.guest} Guests</span>
    </li>
  ));

class Package extends React.Component {
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
    const { data } = this.props;
    return (
      <section className="packages__container">
        <div className="packages__wrapper">
          <div className="packages__content">
            <h3 className="packages__title">
              {data.name} <span className="divider">|</span> <span className="package-type">{data.subName}</span>
            </h3>
            <ul>
              {service(data.services)}
              {packagePrice(data.info)}
            </ul>
          </div>

          <div className="packages__img">
            <img src={Image} alt="Package1" />
          </div>
        </div>

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
          <h2 ref={subtitle => (this.subtitle = subtitle)}>{data.name}</h2>
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
      </section>
    );
  }
}

const Packages = () => (
  <div className="wrapper">
    <div className="section">
      <h2 className="section-title">Packages</h2>
      <small id="packages__travel-fee">
        *There will be an extra $50 traveling fee 30 miles outside of Atlanta area.{' '}
      </small>
    </div>

    {packageContent.packages.map((data, i) => <Package data={data} key={i} />)}
  </div>
);

export default Packages;
