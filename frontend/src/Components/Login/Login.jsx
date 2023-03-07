import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // Initialize the access and refresh token in localStorage
      localStorage.clear();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data["access"]}`;

      // Redirect to home page
      window.location.href = "/";
    } catch (error) {
      // Display error message
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center container-size bg-light-blue mt-4">
      <Form onSubmit={submit}>
        <h1 className="mb-4">Login</h1>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
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
        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
