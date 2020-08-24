import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="w-100">
      <Nav className="d-flex justify-content-center w-100">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/profile">Profile</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/login">Login</Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
