import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from '../theme/globalStyles'

import Header from './Header/index'

const PackageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQueryPkg {
        site {
          siteMetadata {
            title
            menuLinks {
              name 
              link
              color
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Suites By JK' },
            { name: 'keywords', content: 'suites by jk' },
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'Suites By JK' },
            { property: 'og:site_name', content: 'Suite By JK' },
            { property: 'og:url', content: 'https://suitesbyjk.com' },
          ]}
        >
          <html lang="en" />
        </Helmet>

          <ThemeProvider theme={theme}>
            <Wrapper>
              <GlobalStyle />
              <Link to="/">&larr; Back home</Link>
              <Header
                menuLinks={data.site.siteMetadata.menuLinks}
                siteTitle={data.site.siteMetadata.title}
              />

              {children}
            </Wrapper>
          </ThemeProvider>
      </>
    )}
  />
)

const GlobalStyle = createGlobalStyle`
  a {
    :hover {
      text-decoration: underline;
      color: ${ props => props.theme.secondary };
    }
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1.45rem 1.0875rem;
  background-color: #FFF;
`

PackageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PackageLayout
