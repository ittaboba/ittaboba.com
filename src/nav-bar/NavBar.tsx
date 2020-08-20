import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import './NavBar.css';

function NavBar() {

  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{width: '100%', zIndex: 10}}>
      <Navbar expanded={expanded} fixed="top" bg="white" expand="sm">
        <Container>
          <Navbar.Brand onClick={() => setTimeout(() => {setExpanded(false)}, 200)} as={Link} className="Brand" to="/" style={{lineHeight: '68px'}}>
            <img
              style={{marginTop: '20px'}}
              src="/logo-dark.svg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Lorenzo Bernaschina's logo"
            />
            ittaboba.com
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => { 
            setExpanded(expanded ? false : true)
          }} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="Link mr-auto">
              <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 200)} as={Link} className="LinkItem" to="/essays">Essays</Nav.Link>
              <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 200)} as={Link} className="LinkItem" to="/projects">Projects</Nav.Link>
              <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 200)} as={Link} className="LinkItem" to="/about">About</Nav.Link>
              <Nav.Link onClick={() => setTimeout(() => {setExpanded(false)}, 200)} as={Link} className="LinkItem" to="/contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar