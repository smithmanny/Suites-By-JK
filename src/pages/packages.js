import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { PageTitle, PageSubTitle } from '../components/shared/Text'

export default ({ data }) => (
  <Layout>
    <PageTitle>Our Packages</PageTitle>
    <PageSubTitle>*There will be an extra $50 traveling fee 30 miles outside of the Greater Atlanta area.</PageSubTitle>

    <ServiceWrapper>
      {data.site.siteMetadata.packages.map(jkPackage => (
        <Link key={jkPackage.name} to={`/packages/${ jkPackage.link }`}>
          <img src={require(`../images/${ jkPackage.image }`)} alt=""/>
        </Link>
      ))}
    </ServiceWrapper>

  </Layout>
)

export const query = graphql`
  query {
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
`

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px 5px;
`
