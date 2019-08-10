import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Mainpage from './containers/Mainpage.js';
import './App.css';


function App() {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">RS-LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <NavDropdown title="2019 Competitions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Robot Combat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Line Following</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engineering Challenge</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">About US</Nav.Link>
            <Nav.Link href="#deets">Contact US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Mainpage />
    </div>
  );
}

export default App;
