import React from 'react';
import Img from 'gatsby-image';

import BookModal from '../components/bookModal';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const flyer = post.frontmatter.image.publicURL;

  return (
    <div className="wrapper">
      <section className="section">
        <h2 className="section-title">{post.frontmatter.title}</h2>
        {/* <Img resolutions={data.file.childImageSharp.resolutions} /> */}
        <img src={flyer} alt={post.frontmatter.title} />
        <div className="package-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <BookModal title={post.frontmatter.title} />
      </section>
    </div>
  );
}

export const postQuery = graphql`
  query PackageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image {
          publicURL
        }
      }
    }
  }
`;
