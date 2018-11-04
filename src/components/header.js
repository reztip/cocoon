import React from 'react'
import { Link } from 'gatsby'
import { Container, Heading, Navbar } from 'react-bulma-components'

const Header = data => (
  <Navbar style={{ margin: '0 0 2em' }}>
    <Container>
      <Navbar.Brand>
        <Navbar.Item renderAs="div">
          <Heading size={1}>
            <Link to="/" style={{ color: '#000000' }}>
              {data.siteTitle}
            </Link>
          </Heading>
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item renderAs="div">
            <Link to="/signup" style={{ color: '#000000' }}>
              Sign Up
            </Link>
          </Navbar.Item>
          <Navbar.Item renderAs="div">
            <Link to="/postForm" style={{ color: '#000000' }}>
              Post
            </Link>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Container>
  </Navbar>
)

export default Header
