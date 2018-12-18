import React from 'react'

import Instagram from '../images/instagram.svg'
import Facebook from '../images/facebook.svg'
import Mail from '../images/mail.svg'

export default () => {
  const style = {
    margin: 0,
    height: 50,
    width: 50
  }

  return (
    <React.Fragment>
      <footer
        style={{
          margin: '0 auto',
          maxWidth: 1000,
          backgroundColor: '#e2e2e2',
          padding: '1.45rem 1.0875rem',
          display: 'flex',
          flexWrap: 'wrap'
        }}>
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          listStyle: 'none',
          margin: 0,
          flex: 1
        }}>
          <li style={style}>
            <a href="https://www.instagram.com/byjk_llc/" rel="noopener noreferrer" target="_blank">
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
          <li style={style}>
            <a href="https://www.facebook.com/byJKllc/?ref=search" rel="noopener noreferrer" target="_blank">
              <img src={Facebook} alt="Facebook" />
            </a>
          </li>
          <li style={style}>
            <a href="mailto:suitesbyjk@gmail.com">
              <img src={Mail} alt="Mail" />
            </a>
          </li>
        </ul>

        <h3
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0
          }}>
          Suites By JK &#169; 2018
        </h3>
      </footer>
      <small
        style={{
          margin: '0 auto',
          maxWidth: 1000,
          backgroundColor: '#e2e2e2',
          padding: '1.45rem 1.0875rem',
          display: 'flex',
          justifyContent: 'center'
        }}>
          Designed by &nbsp;<a href="https://shakhorsmith.com" rel="noopener noreferrer" target="_blank">Shakhor Smith</a>
      </small>
    </React.Fragment>
  )
}
