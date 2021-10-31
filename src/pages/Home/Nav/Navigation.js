import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faHandHoldingMedical,faUsers,faAddressCard,faSignInAlt,faUser,faSignOutAlt, faFire,faTasks, faCubes } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const { user, logOut } = useAuth();
  const homeIcon= <FontAwesomeIcon icon={faBus} />
  const care = <FontAwesomeIcon icon={faHandHoldingMedical} />
  const us = <FontAwesomeIcon icon={faUsers} />
  const news = <FontAwesomeIcon icon={faFire} />
  const about = <FontAwesomeIcon icon={faAddressCard} />
  const signin = <FontAwesomeIcon icon={faSignInAlt} />
  const signout = <FontAwesomeIcon icon={faSignOutAlt} />
  const loginas = <FontAwesomeIcon icon={faUser} />
  const task = <FontAwesomeIcon icon={faTasks} />
  const cubes = <FontAwesomeIcon icon={faCubes} />
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="success bg-opacity-75" variant="dark" sticky="top" className=" ">
        <Container>
          <Navbar.Brand as={HashLink} to="/home#carousel"><span className="text-warning">{homeIcon}</span> TRAVELLERS PARADISE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to ="/home#services"><span className="text-warning">{care}</span>Services</Nav.Link>
              <Nav.Link as={HashLink} to ="/home#guide"><span className="text-warning">{us}</span>Team</Nav.Link>
              <Nav.Link as={HashLink} to ="/home#place"><span className="text-warning">{news}</span> Popular</Nav.Link>
              {user?.email?
                <Nav.Link as={Link} to="/myorder"><span className="text-warning">{about}</span> My Orders</Nav.Link>:
                <Nav.Link as={Link} to=""></Nav.Link>
              }
              {user?.email?
                <Nav.Link as={Link} to="/manageorder"><span className="text-warning">{task }</span> Manage Orders</Nav.Link>:
                <Nav.Link as={Link} to=""></Nav.Link>
              }
              {user?.email ?
                <Nav.Link as={Link} to="/addpackage"><span className="text-warning">{cubes}</span> Add Package</Nav.Link>:
                <Nav.Link as={Link} to=""></Nav.Link>
              }
            </Nav>
            <Nav>
              {user?.email ?
                <Button onClick={logOut} variant="info m-1 mt-1"><span className="text-warning">{}</span><span className="text-warning">{signout}</span>Logout</Button> :
                <Nav.Link as={Link} to="/login" className="mx-3"><span className="text-warning">{}</span> <span className="text-warning">{signin}</span>Login</Nav.Link>}
              <Navbar.Text className="text-white d-flex mx-2 ">
                <div><span className="text-warning">{loginas}</span> User : {user?.displayName}</div>
                <div><img className="w-50" src={user?.photoURL} alt="" /></div>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
