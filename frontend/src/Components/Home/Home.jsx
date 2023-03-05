import React from "react";
import { Container, Row, Col, Card, Badge,Button } from "react-bootstrap";
import { FaStackOverflow } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          {/* This is the left bar implemented */}
          <Col sm={2} className="bg-light mt-5">
            <Card className="p-2 bg-warning mb-3">
              <h5>Left Sidebar</h5>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
            </Card>
            <Card className="p-2 bg-warning mb-3">
              <h5>Left Sidebar 1</h5>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
            </Card>
            <Card className="p-2 bg-warning mb-3">
              <h5>Left Sidebar 2</h5>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
              <p>This is the left sidebar.</p>
            </Card>
          </Col>
          {/* This is the question list implemented */}
          <Col sm={8} className="mt-5">
            <Card className="p-3">
              <h1>Welcome to my Stack Overflow clone</h1>
              <p>
                This is a simple implementation of the Stack Overflow UI using
                React
              </p>
              <Row>
                <Col md={4} className="d-flex flex-row">
                    <Card>
                      <Card.Img variant="top" src="https://via.placeholder.com/150" />
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
                        <Card.Text>A short description of the topic goes here.</Card.Text>
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
          <Col sm={2} className="bg-light mt-5">
            <Card className="p-2 bg-warning mb-3">
              <h5>Right Sidebar 2</h5>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
            </Card>
            <Card className="p-2 bg-warning ">
              <h5>Right Sidebar 3</h5>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
              <p>This is the right sidebar.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
