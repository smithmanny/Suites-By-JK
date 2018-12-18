import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = ({ menuLinks }) => (
  <Nav>
    {menuLinks.map(link =>
      <HeaderItem key={link.name}>
        <Link
          to={link.link}
          style={{
            color: link.color,
            fontSize: '30px'
          }}
        >
          {link.name}
        </Link>
      </HeaderItem>
    )}
  </Nav>
)

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  justify-content: space-between;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`

const HeaderItem = styled.li`
  list-style-type: none;
  margin: 0 15px;
`

export default Header
