import React from 'react';
import './NavBar.js'
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const NavBar = () => {
  return (
    <Navbar className='gradient_bg px-3' bg='dark' variant='dark' expand='lg' >
      <LinkContainer to="/">
        <Navbar.Brand>Meal Time! </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer to='/'>
            <Nav.Link className='mr-lg-2'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/meals/new'>
            <Nav.Link>Create Meal</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;