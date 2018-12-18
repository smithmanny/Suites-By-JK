import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { PageTitle, PageSubTitle } from '../components/shared/Text'

const Packages = () => (
  <Layout>
    <PageTitle>Our Packages</PageTitle>
    <PageSubTitle>*There will be an extra $50 traveling fee 30 miles outside of the Greater Atlanta area.</PageSubTitle>

    <StaticQuery
      query={graphql`
          query PackagesQuery {
            site {
              siteMetadata {
                packages {
                  name 
                  link
                  image
                }
              }
            }
          }
        `}
      render={data => (
        <ServiceWrapper>
          {data.site.siteMetadata.packages.map(jkPackage => (
            <Link key={jkPackage.name} to={`/packages/${ jkPackage.link }`}>
              <img src={require(`../images/${ jkPackage.image }`)} alt=""/>
            </Link>
          ))}
        </ServiceWrapper>
      )}
    />
    )
  </Layout>
)

export default Packages

export const query = graphql`
  query {
    file(relativePath: { eq: "meet-the-owners.jpg" }) {
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

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px 5px;
`
