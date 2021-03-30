import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from '../Images/Logo.png';

function NavBar() {
  return (
    <div id='nav'>
      <div id="container">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" id="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="nav-items"/>
          <Navbar.Collapse id="nav-items">
            <Nav>
              <Nav.Link href="/" class="nav-link">Home</Nav.Link>
              <Nav.Link href="/about" class="nav-link">About</Nav.Link>
              <Nav.Link href="/mentors" class="nav-link">Mentors and Judges</Nav.Link>
              <Button variant="outline-primary shadow-none">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSekpg0-j0vEGCWg9ZM534NdDofMMaJggohJXFv6b1MrGPUYpw/viewform" 
                target="_blank" rel="noopener noreferrer">Apply Now!</a>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;