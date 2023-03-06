import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
//   const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login logic here, e.g. call an API to verify credentials
    if (email === "user@example.com" && password === "password") {
      // successful login, redirect to home page
    //   history.push("/");
    } else {
      // unsuccessful login, display error message
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center container-size bg-light-blue mt-4">
      <Form onSubmit={handleSubmit}>
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
