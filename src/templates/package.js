import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import PackageLayout from '../components/PackageLayout'

class JKPackage extends React.Component {
  launchForm = () => {
    return (
    <script dangerouslySetInnerHTML={{
      __html: `
      (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
      `
    }} />
    )
  }

  render() {
    const post = this.props.data.markdownRemark
    const image = this.props.data.file.childImageSharp.fluid

    return (
      <PackageLayout>
        <Helmet
          title={`Suites By JK | ${ post.frontmatter.title }`}
          meta={[
            { name: 'description', content: post.frontmatter.title },
            { property: 'og:title', content: `${ post.frontmatter.title } | Suites By JK` },
            { property: 'og:url', content: `https://suitesbyjk/packages/${ post.frontmatter.slug }` },
          ]}
        />
        <PackageTitle blogPost>{post.frontmatter.title}</PackageTitle>

        <Img fluid={image} alt={post.title} style={{ maxWidth: 700, margin: 'auto', marginBottom: 30 }} />

        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <Button
          target="_blank"
          href="https://shakhorsmith.typeform.com/to/kcOBu0"
          data-mode="popup"
          data-submit-close-delay="5"
        >
          Schedule Now
        </Button>
      </PackageLayout>
    )
  }
}

export default JKPackage

export const query = graphql`
  query($slug: String!, $image: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        image
      }
    }

    file(relativePath: { eq: $image }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Button = styled.a`
  background-color: ${ props => props.theme.primary };
  background-image: none;
  border: none;
  color: #FFF;
  width: 150px;
  height: 45px;
  border-radius: 75px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: none;

  :hover {
    color: #FFF;
    text-decoration: none;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PackageTitle = styled.h2`
  text-align: center;
  color: ${ props => props.theme.title };
  margin: 50px 0;
`
