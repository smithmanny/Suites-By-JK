import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Packages = ({ data }) => (
  <div className="wrapper">
    <div className="section">
      <h2 className="section-title">Packages</h2>
      <small id="packages__travel-fee">
        *There will be an extra $50 traveling fee 30 miles outside of Atlanta area.{' '}
      </small>

      {data.allFile.edges.map(image => (
        <div className="packages__wrapper">
          <Img resolutions={image.node.childImageSharp.resolutions} />
        </div>
      ))}
    </div>
  </div>
);

export const query = graphql`
  query allImgsQuery {
    allFile(filter: { sourceInstanceName: { eq: "package images" } }) {
      edges {
        node {
          name
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
