import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styles from '../stylesheets/packages.module.scss';
import BookModal from '../components/bookModal';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div className="wrapper">
      <section className="section">
        <h1 className={styles.packageTitle}>{post.frontmatter.title}</h1>
        <div className={styles.packageLogo}>
          <Img sizes={data.file.childImageSharp.sizes} />
        </div>
        <div className={styles.packageContent} dangerouslySetInnerHTML={{ __html: post.html }} />
        <BookModal title={post.frontmatter.title} />
      </section>
    </div>
  );
}

Template.defaultProps = {
  data: null,
};

Template.propTypes = {
  data: PropTypes.shape(),
};

export const query = graphql`
  query PackageDetailQuery($path: String!, $image: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image
      }
    }

    file(relativePath: { eq: $image }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 350, maxHeight: 350) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
