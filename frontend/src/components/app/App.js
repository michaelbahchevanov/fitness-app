import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Purchase } from '../';
import { Profile } from '../';

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="d-flex justify-content-center w-100">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Buy</Nav.Link>
          <Nav.Link>Profile</Nav.Link>
        </Nav>
      </Navbar>
      <Purchase />
      <Profile />
    </>
  );
};

export default App;
