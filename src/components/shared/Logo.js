import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import LogoImage from '../../images/logo.png'

export default () => (
  <LogoWrapper>
    <Link to="/">
      <Img src={LogoImage} alt="Logo" />
    </Link>
  </LogoWrapper>
)

const Img = styled.img`
  width: 100%;
`

const LogoWrapper = styled.div`
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`
