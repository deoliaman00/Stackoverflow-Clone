import React from "react";
import { Col, Card } from "react-bootstrap";

const RightSideBar = () => {
  return (
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
  );
};

export default RightSideBar;


