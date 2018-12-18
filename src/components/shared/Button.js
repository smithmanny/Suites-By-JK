import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Button = ({ children, ...props }) => (
  <ButtonStyle {...props}>{children}</ButtonStyle>
)

const ButtonStyle = styled(Link)`
  background-color: ${ props => props.theme.primary };
  background-image: none;
  border: none;
  color: #FFFFFC;
  width: 150px;
  height: 45px;
  border-radius: 75px;
  margin-top: '5px';
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: none;

  :hover {
    color: #FFF;
    text-decoration: none;
  }

  @media (max-width: 580px) {
    margin: 10px auto;
  }
`

export default Button
