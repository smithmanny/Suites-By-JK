import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { Slide } from 'react-slideshow-image'
import Img from 'gatsby-image'

import Newsletter from '../components/shared/Newsletter'
import Layout from '../components/layout'

export default ({ data }) => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

  return (
    <Layout>
      <Quote>
        <QuoteTitle>Enjoy The Ultimate Experience At Your Front Door</QuoteTitle>
      </Quote>

      <Title>Services</Title>
      <ServiceWrapper>
        {data.site.siteMetadata.packages.map(jkPackage => (
          <Link key={jkPackage.name} to={`/packages/${ jkPackage.link }`}>
            <img src={require(`../images/${ jkPackage.image }`)} alt={jkPackage.name} />
          </Link>
        ))}
      </ServiceWrapper>

      <Newsletter />

      <Slide {...properties}>
        {data.allFile.edges.map(slideshow => (
          <div className="each-slide" style={{ maxHeight: 600, marginTop: 20 }}>
            <Img fluid={slideshow.node.childImageSharp.fluid} />
          </div>
        ))}
      </Slide>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        packages {
          name 
          link
          image
        }
      }
    }

    allFile(filter: {sourceInstanceName: {eq: "slideshow"}}) {
      edges {
        node {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const Title = styled.h2`
  text-align: center;
  margin: 50px 0;
`

const Quote = styled.div`
  padding: 40px 0;
  background-color: black;
`

const QuoteTitle = styled.h5`
  color: ${ props => props.theme.secondary };
  text-align: center;
  margin: 0;
  font-size: 25px;
  text-transform: capitalize;
  font-style: italic;
  font-family: Oleo Script;
`

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px 5px;
`
