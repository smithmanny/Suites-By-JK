import React from 'react'
import Image from '../../img/pic1.jpg';

const service = (services) => {
  return services.map( (service, i) => <li key={i}>{service}</li> );
}

const packagePrice = (info) => {
  return info.map( (data, i) => {
    return <li className="package-price" key={i}>${data.price} - <span className="packages__guest">{data.guest} Guests</span></li>
  })
}

const Package = ({ data }) => (
  <section className="packages__container">
    <div className="packages__wrapper">
      <div className="packages__content">
        <h3 className="packages__title">
          {data.name} <span className="divider">|</span>{' '}
          <span className="package-type">{data.subName}</span>
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

    <button className="btn">Book Now</button>
  </section>
);

export default Package;