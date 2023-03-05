import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import stackoverflow from './stackoverflow.jpg'
import './Navbar.css'
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // perform any additional logout logic here
  };

  return (
    <Navbar
      bg="light"
      variant="dark"
      expand="lg"
      style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={stackoverflow} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto flex-fill">
            <Nav.Link className="NavLinks" href="#home" >
              Home
            </Nav.Link>
            <Nav.Link className="NavLinks" href="#topics">
              Topics
            </Nav.Link>
            <Nav.Link className="NavLinks" href="#products">
              Products
            </Nav.Link>
          </Nav>
          {isLoggedIn ? (
            <Nav>
              <Nav.Link
                className="NavLinks"
                href="#logout"
                onClick={handleLogout}
              >
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link className="NavLinks" href="#register">
                Register
              </Nav.Link>
              <Nav.Link className="NavLinks" href="#login">
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
