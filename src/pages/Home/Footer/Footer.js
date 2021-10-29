import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <MDBFooter bgColor='success bg-opacity-75' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-start'>TRAVELLERS PARADISE</h5>

            <p className="text-start"> level-6, 46, Khilkhet, Dhaka</p>
            <p className="text-start"> Official: travellers@haven.com</p>
            <p className="text-start"> Helpline : 018822119999 (Available : 09:00am to 7:00pm)</p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
              <Nav.Link as={HashLink} to ="/home#services" className="text-light">TRAVELLERS PARADISE</Nav.Link>
              </li>
              <li>
              <Nav.Link as={Link} to="" className="text-light">Why Us</Nav.Link>
              </li>
              <li>
              <Nav.Link as={Link} to="" className="text-light">News</Nav.Link>
              </li>
              <li>
              <Nav.Link as={Link} to="" className="text-light">About Us</Nav.Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Navbar.Brand as={Link} to="/home" className="text-light">TRAVELLERS PARADISE</Navbar.Brand>
      </div>
    </MDBFooter>
    );
};

export default Footer;