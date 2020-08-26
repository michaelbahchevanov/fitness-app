import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Routes from '../../constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <Nav className="mx-auto">
        <Nav.Item>
          <Link to={Routes.PRIVACY_POLICY}>Privacy Policy</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={Routes.COOKIE_POLICY}>Cookie Policy</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={Routes.CONTACT}>Contact us</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Footer;
