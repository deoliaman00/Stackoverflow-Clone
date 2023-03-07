import React, { useState,useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import stackoverflow from './stackoverflow.jpg'
import './Navbar.css'
import {  Link } from "react-router-dom";
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // perform any additional logout logic here
     window.location.href = "/logout";
  };
  useEffect(() => {
    if(localStorage.getItem('access_token')!==null){
      setIsLoggedIn(true);
    }
  }, [isLoggedIn])
  

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
            <Link
              to="/"
              className="NavLinks btn "
              style={{
                borderRadius: "10px",
                marginRight: "60px",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>{" "}
            <Link
              to="#"
              className="NavLinks btn "
              style={{ marginRight: "60px", fontWeight: "bold" }}
            >
              Topics
            </Link>
            <Link
              to="#"
              className="NavLinks btn "
              style={{ marginLeft: "10px", fontWeight: "bold" }}
            >
              Products
            </Link>
          </Nav>
          {isLoggedIn ? (
            <Nav>
              <button
                className="btn"
                style={{ fontWeight: "bold" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </Nav>
          ) : (
            <Nav>
              <Link
                to="/register"
                className="NavLinks btn "
                style={{ fontWeight: "bold" }}
              >
                Register
              </Link>{" "}
              <Link
                to="/login"
                className="NavLinks btn "
                style={{ marginLeft: "60px", fontWeight: "bold" }}
              >
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
