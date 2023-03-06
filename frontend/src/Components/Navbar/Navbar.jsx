import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import stackoverflow from './stackoverflow.jpg'
import './Navbar.css'
import {  Link } from "react-router-dom";
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
            <Link to="/" className="NavLinks">
              Home
            </Link>{" "}
            <Link to="#" className="NavLinks">
              Topics
            </Link>
            <Link to="#" className="NavLinks">
              Products
            </Link>
          </Nav>
          {isLoggedIn ? (
            <Nav>
              <Link to="#" className="NavLinks" onClick={handleLogout}>
                Logout
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Link to="/register" className="NavLinks">
                Register
              </Link>
              <Link to="/login" className="NavLinks">
                Login
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
