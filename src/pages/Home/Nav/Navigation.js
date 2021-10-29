import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="success bg-opacity-50" variant="dark" sticky="top" className=" ">
        <Container>
          <Navbar.Brand as={HashLink} to="/home#carousel">TRAVELLERS PARADISE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to ="/home#services">Services</Nav.Link>
              <Nav.Link as={HashLink} to ="/home#guide">Team</Nav.Link>
              <Nav.Link as={HashLink} to ="/home#place">Popular</Nav.Link>
              {user?.email?
                <Nav.Link as={Link} to="/myorder">My Orders</Nav.Link>:
                <Nav.Link as={Link} to=""></Nav.Link>
              }
              {user?.email?
                <Nav.Link as={Link} to="/manageorder">Manage Orders</Nav.Link>:
                <Nav.Link as={Link} to=""></Nav.Link>
              }
              {user?.email ?
                <Nav.Link as={Link} to="/addpackage">Add Package</Nav.Link>:
                <Nav.Link as={Link} to=""></Nav.Link>
              }
            </Nav>
            <Nav>
              {user?.email ?
                <Button onClick={logOut} variant="info m-1 mt-1"><span className="text-warning">{}</span>Logout</Button> :
                <Nav.Link as={Link} to="/login" className="mx-3"><span className="text-warning">{}</span> Login</Nav.Link>}
              <Navbar.Text className="text-white d-flex mx-2 ">
                <div><span className="text-warning">{}</span> Login as : {user?.displayName}</div>
                <div><img className="w-25" src={user?.photoURL} alt="" /></div>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
