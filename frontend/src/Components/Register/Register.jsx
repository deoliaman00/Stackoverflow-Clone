import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Register.css";
import axios from "axios";
function Register() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };
    axios
      .post("http://127.0.0.1:8000/api/register/", data)
      .then((response) => {
        console.log(response.data);
        window.open("http://localhost:3000/login", "_self");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Email already exists");
      });
  };
  const handlefirst_nameChange = (event) => {
    setfirst_name(event.target.value);
  };

  const handlelast_nameChange = (event) => {
    setlast_name(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", { first_name, last_name, email, password });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center container-size bg-light-blue mt-4 ">
      <Form onSubmit={handleSubmit}>
        <h1 className="mb-4 display-1 font-weight-bold">Register</h1>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={first_name}
            onChange={handlefirst_nameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={last_name}
            onChange={handlelast_nameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button
          className="mt-3"
          variant="primary"
          type="submit"
          onClick={HandleSubmit}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
