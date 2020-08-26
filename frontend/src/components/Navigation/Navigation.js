import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Routes from '../../constants/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="w-100">
      <Nav className="d-flex justify-content-center w-100">
        <Nav.Item>
          <Link to={Routes.LANDING}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={Routes.ACCOUNT}>Profile</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={Routes.ABOUT}>About</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to={Routes.LOGIN}>Login</Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
