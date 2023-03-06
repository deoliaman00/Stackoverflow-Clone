import React from "react";
import {useEffect,useState} from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import "./Home.css";
import { Link } from "react-router-dom";
import Axios from "axios";

const HomePage = () => {
  const [heading,setheading]=useState("");
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/questions/").then((res) => {
      setheading(res.data[0].info);
    });
  }, []);
  return (
    <div>
      <Container fluid>
        <Row>
          <LeftSideBar />
          {/* This is the question list implemented */}
          <Col sm={8} className="mt-5">
            <Card className="p-3">
              <div className="container">
                <h1 className="title">Questions </h1>
                <Link to="/question">
                  <button className="Questionbtn">Create Question</button>
                </Link>
              </div>
              <p>{heading}</p>
              <Row>
                <Col md={4} className="d-flex flex-row">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <Card.Title>Topic 1</Card.Title>
                        <div>
                          <Badge variant="info" className="ml-2">
                            10 questions
                          </Badge>
                          <Badge variant="warning" className="ml-2">
                            15 answers
                          </Badge>
                        </div>
                      </div>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 1</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 2</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 2</Button>
                      <Badge variant="info" className="ml-2">
                        20 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        30 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 3</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 4</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 5</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 7</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 8</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 9</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 10</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 11</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 12</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://via.placeholder.com/150"
                    />
                    <Card.Body>
                      <Card.Title>Topic 13</Card.Title>
                      <Card.Text>
                        A short description of the topic goes here.
                      </Card.Text>
                      <Button variant="primary">Go to Topic 3</Button>
                      <Badge variant="info" className="ml-2">
                        5 questions
                      </Badge>
                      <Badge variant="warning" className="ml-2">
                        10 answers
                      </Badge>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* Here we have implemented the right bar */}
          <RightSideBar />
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
