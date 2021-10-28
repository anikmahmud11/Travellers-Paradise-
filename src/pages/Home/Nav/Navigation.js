import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
       <>
        <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/myorder">My Order</Nav.Link>
      <Nav.Link as={Link} to="/manageorder">Manage Orders</Nav.Link>
      <Nav.Link as={Link} to="/addpackage">Add Package</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
       </>
    );
};

export default Navigation;