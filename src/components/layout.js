import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { theme } from '../theme/globalStyles'

import Header from './Header/index'
import Logo from './shared/Logo'
import Footer from './Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
            { property: 'og:type', content: 'profile' },
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
                <Header
                  menuLinks={data.site.siteMetadata.menuLinks}
                  siteTitle={data.site.siteMetadata.title}
                />
                <Logo />

                {children}
              </Wrapper>
          </ThemeProvider>
          <Footer />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
