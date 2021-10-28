import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="success bg-opacity-50" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand as={Link} to ="/home">TRAVELLERS PARADISE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to ="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/myorder"></Nav.Link>
      <Nav.Link as={Link} to="/manageorder">Manage Orders</Nav.Link>
      <Nav.Link as={Link} to="/addpackage">Add Package</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      <Navbar.Text>   Sign in as :   </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};

export default Navigation;
