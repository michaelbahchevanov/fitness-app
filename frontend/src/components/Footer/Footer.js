import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <Nav className="mx-auto">
        <Nav.Link>
          <Link to="/privacy">Privacy Policy</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/cookie">Cookie Policy</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/contact">Contact us</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
