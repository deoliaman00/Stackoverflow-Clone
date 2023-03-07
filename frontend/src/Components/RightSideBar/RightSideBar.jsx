import React from "react";
import { Col, Card, Row } from "react-bootstrap";

const RightSideBar = () => {
  return (
    <Col sm={3} className="bg-light mt-5">
      <Card className="p-2 bg-warning mb-3">
        <h5 className="rightMainblock">The Overflow Blog </h5>
        <hr />
        <p>
          🖍 Observability is key to the future of software(ans DevOps career)
        </p>
        <p>🖍 Podcast 374. How valuable is your screen name</p>
        <p>🖍 Avoid pandemics. Go figure.</p>
        <p>🖍 You cannot “book learn” how to code.</p>
        <p>🖍 Recycling is important.</p>
      </Card>
      <Card className="p-2 bg-warning">
        <h5 className="rightMainblock">Tags</h5><hr />
        <Row>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 1</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 2</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Tag 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default RightSideBar;
