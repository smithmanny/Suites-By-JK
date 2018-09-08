import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import BookModal from '../components/bookModal';

import styles from '../stylesheets/packages.module.scss';

class PackageLayout extends Component {
  render() {
    const { post, file } = this.props;
    return (
      <div className="wrapper">
        <section className="section">
          <h1 className={styles.packageTitle}>{post.frontmatter.title}</h1>
          <div className={styles.packageLogo}>
            <Img sizes={file.childImageSharp.sizes} />
          </div>
          <div className={styles.packageContent} dangerouslySetInnerHTML={{ __html: post.html }} />
          <BookModal title={post.frontmatter.title} />
        </section>
      </div>
    );
  }
}

PackageLayout.propTypes = {
  post: PropTypes.string.isRequired,
  file: PropTypes.file.shape().isRequired,
};

export default PackageLayout;
