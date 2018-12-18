import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import { PageTitle, PageSubTitle } from '../components/shared/Text'
import Newsletter from '../components/shared/Newsletter'

const About = ({ data }) => (
  <Layout>
    <PageTitle>Meet The Owners</PageTitle>
    <PageSubTitle>Suites By JK</PageSubTitle>
    <P>MEET THE J AND THE K OF SUITES BY JK! JAKKERA ALAN ELLISON AND KHADIJAH COTTLE ALWAYS KNEW ONCE THE TIME WAS RIGHT THAT DESTINY WOULD LEAD THEM INTO THE RIGHT DIRECTION. THEY ALWAYS KNEW THEY WANTED TO CREATE UNIQUE EVENTS FOR ALL AGES, THEY JUST DIDN’T THINK THEY WOULD BE SO FANTASTIC! JAKKERA AND KHADIJAH HAVE KNOWN ONE ANOTHER ALL OF THEIR LIVES, SO THEIR BOND MAKES FOR A FUN ENVIRONMENT IT’S NEVER A DULL MOMENT WITH THE TWO OF THEM! WHAT ONE LACKS THE OTHER BRINGS TO THE TABLE. WE HOPE YOU ENJOY THEM AS MUCH AS THEY ENJOY ONE ANOTHER!</P>

    <Img fluid={data.file.childImageSharp.fluid} alt="Meet the owners picture" style={{ maxWidth: 700, margin: 'auto', marginBottom: 30 }} />

    <PageTitle>About Us</PageTitle>
    <P>
    Suites By JK allows you to turn our party bus into your own unique venue. Our goal is to provide you with the ultimate experience right at your front door. Suites By JK provides you with a mobile party service for all ages.
    </P>

    <Newsletter />
  </Layout>
)

export default About

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

const P = styled.p`
  font-family: serif;
  text-align: center;
`
