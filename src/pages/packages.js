import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const convertLink = link => {
  const extension = link.indexOf('.');
  const URL = link.slice(0, extension).replace(/_/g, '-');

  return URL;
};

const Packages = ({ data }) => (
  <div className="wrapper">
    <div className="section">
      <h1 className="section-title">Packages</h1>
      <small id="packages__travel-fee">
        *There will be an extra $50 traveling fee 30 miles outside of Atlanta area.{' '}
      </small>
      <div className="packages__wrapper">
        {data.allFile.edges.map(image => (
          <div className="packages__content" key={image.node.name}>
            <Link to={`packages/${convertLink(image.node.relativePath)}`}>
              <Img resolutions={image.node.childImageSharp.resolutions} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Packages.defaultProps = {
  data: null,
};

Packages.propTypes = {
  data: PropTypes.shape(),
};

export const query = graphql`
  query allImgsQuery {
    allFile(filter: { sourceInstanceName: { eq: "package images" } }) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            resolutions(width: 250, height: 250) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`;

export default Packages;
