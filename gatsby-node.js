const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const packageTemplate = path.resolve('src/templates/package.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        image: node.frontmatter.image,
        component: packageTemplate,
      });
    });
  });
};
