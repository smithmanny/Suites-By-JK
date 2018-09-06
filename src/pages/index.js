import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { Fade } from 'react-slideshow-image';

import Newsletter from '../components/newsletter';

const IndexPage = ({ data }) => {
  const images = data.allFile.edges.map(image => image.node.childImageSharp.sizes);
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 1000,
  };

  return (
    <div className="wrapper">
      <Fade {...fadeProperties}>
        {images.map(image => (
          <div className="home-image" key={image.src}>
            <Img sizes={image} />
          </div>
        ))}
      </Fade>

      <section className="quote-wrapper">
        <p className="quote">Enjoy the ultimate experience at your front door</p>
      </section>

      <section className="section">
        <h2 className="section-title">Services</h2>

        <div className="services-wrapper">
          <div className="left-service">
            <ul>
              <li>
                <Link to="/packages/so-you-think-you-can-sing">
                  So You Think You Can Sing <span className="divider">|</span>
                  <span className="package-type"> Karaoke</span>
                </Link>
              </li>
              <li>
                <Link to="/packages/all-access">
                  All Access <span className="divider">|</span>
                  <span className="package-type"> VIP Kids</span>
                </Link>
              </li>
              <li>
                <Link to="/packages/the-day-camp">The Day Camp</Link>
              </li>
              <li>
                <Link to="/packages/pampered-princess">Pampered Princess</Link>
              </li>
            </ul>
          </div>

          <div className="right-service">
            <ul>
              <li>
                <Link to="/packages/bridal-transportation">Bridal Transportation</Link>
              </li>
              <li>
                <Link to="/packages/the-glow-up">
                  The Glow Up <span className="divider">|</span>
                  <span className="package-type"> Kids Glow Party</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="/packages/sip-and-dip">
                  Sip and Dip <span className="divider">|</span>
                  <span className="package-type"> Paint Party</span>
                </Link>
              </li>
              <li>
                <Link to="/packages/grown-ish">
                  Grown-ish<span className="divider">|</span>
                  <span className="package-type"> 21 and older</span>{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

IndexPage.defaultProps = {
  data: null,
};

IndexPage.propTypes = {
  data: PropTypes.shape(),
};

export const query = graphql`
  query HomePageQuery {
    allFile(filter: { sourceInstanceName: { eq: "home images" } }) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            sizes(maxWidth: 400, maxHeight: 275) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
