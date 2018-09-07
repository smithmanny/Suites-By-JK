import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import Slider from 'react-slick';

import styles from '../stylesheets/index.module.scss';
import Newsletter from '../components/newsletter';

const IndexPage = ({ data }) => {
  const images = data.allFile.edges.map(image => image.node.childImageSharp.sizes.src);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wrapper">
      <section className={styles.quoteWrapper}>
        <p>Enjoy the ultimate experience at your front door</p>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Services</h2>

        <div className={styles.servicesWrapper}>
          <div className={styles.leftService}>
            <ul>
              <li>
                <Link to="/packages/so-you-think-you-can-sing">
                  So You Think You Can Sing <span className={styles.divider}>|</span>
                  <span className={styles.packageType}> Karaoke</span>
                </Link>
              </li>
              <li>
                <Link to="/packages/all-access">
                  All Access <span className={styles.divider}>|</span>
                  <span className={styles.packageType}> VIP Kids</span>
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

          <div className={styles.rightService}>
            <ul>
              <li>
                <Link to="/packages/bridal-transportation">Bridal Transportation</Link>
              </li>
              <li>
                <Link to="/packages/the-glow-up">
                  The Glow Up <span className={styles.divider}>|</span>
                  <span className={styles.packageType}> Kids Glow Party</span>{' '}
                </Link>
              </li>
              <li>
                <Link to="/packages/sip-and-dip">
                  Sip and Dip <span className={styles.divider}>|</span>
                  <span className={styles.packageType}> Paint Party</span>
                </Link>
              </li>
              <li>
                <Link to="/packages/grown-ish">
                  Grown-ish<span className={styles.divider}>|</span>
                  <span className={styles.packageType}> 21 and older</span>{' '}
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
