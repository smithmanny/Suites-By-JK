import React from 'react'
import styled from 'styled-components'

const ExtLink = ({ children, ...props }) => {
  return <OutboundLink {...props} target='_blank'>{children}</OutboundLink>
}

const OutboundLink = styled.a`
  text-shadow: none;
  background-image: none;
`

export default ExtLink
