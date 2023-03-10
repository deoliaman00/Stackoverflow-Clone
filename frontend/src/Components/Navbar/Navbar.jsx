import React, { useState,useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import stackoverflow from './stackoverflow.jpg'
import './Navbar.css'
import {  Link } from "react-router-dom";
import axios from "axios"
import Profile from '../Profile/Profile'

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser]=useState("");
  const [userid,setUserid]=useState(null);

  const openProfilepage=()=>{
    window.location.href=`/profile/${userid}`;
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
    // perform any additional logout logic here
     window.location.href = "/logout/";
  };
  useEffect(() => {
    if(localStorage.getItem('access_token')!==null){
      setIsLoggedIn(true);
      getUserDetails();
    }
  }, [isLoggedIn])
  
    const getUserDetails = async () => {
    const token = localStorage.getItem("access_token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const options = {
      withCredentials: true, // add withCredentials option if API requires authentication
    };

    try {
      const response = await axios.get("http://127.0.0.1:8000/api/user/", {
        headers,
        ...options,
      });
      console.log(response.data);
      const name=response.data.first_name;
      setUser(name);
      setUserid(response.data.id);
      console.log(`His id is ${userid}`);
    } catch (error) {
      console.error(error);
    }
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
              onClick={getUserDetails}
              style={{ marginLeft: "10px", fontWeight: "bold" }}
            >
              Products
            </Link>
          </Nav>
          {isLoggedIn ? (
            <>
              <Nav>
                <button
                  onClick={openProfilepage}
                  className="btn"
                  style={{ fontWeight: "bold" }}
                >
                  {user}
                </button>
              </Nav>
              <Nav>
                <button
                  className="btn"
                  style={{ fontWeight: "bold" }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </Nav>
            </>
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
