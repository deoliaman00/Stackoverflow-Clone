import React from "react";
import { Col, Card, Row } from "react-bootstrap";

const RightSideBar = () => {
  return (
    <Col sm={3} className="bg-light mt-3">
      <Card className="p-2 bg-warning mb-3">
        <h5 className="rightMainblock">The Overflow Blog </h5>
        <hr />
        <p>
          π Observability is key to the future of software(ans DevOps career)
        </p>
        <p>π Podcast 374. How valuable is your screen name</p>
        <p>π Avoid pandemics. Go figure.</p>
        <p>π You cannot βbook learnβ how to code.</p>
        <p>π Recycling is important.</p>
      </Card>
      <Card className="p-2 bg-warning mb-3">
        <h5 className="rightMainblock">Note to the Authors </h5>
        <hr />
        <p>βοΈ Writing product: final writing outcome</p>
        <p>βοΈ Writing process: creative act of researching, composing</p>
        <p>βοΈ Author: writer of the writing product;</p>
        <p>βοΈ Sources: a place, person, or thing from which information</p>
        <p>βοΈ Audience: the readership of the writing product.</p>
      </Card>
      <Card className="p-2 bg-warning">
        <h5 className="rightMainblock">Tags</h5>
        <hr />
        <Row>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>AWS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title style={{ fontSize: "18px" }}>Heroku</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title style={{ fontSize: "18px" }}>Django</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>DRF</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>Flutter</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>CSS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>HTML</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>JS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3} md={4}>
            <Card className="mb-2">
              <Card.Body>
                <Card.Title>CS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default RightSideBar;
