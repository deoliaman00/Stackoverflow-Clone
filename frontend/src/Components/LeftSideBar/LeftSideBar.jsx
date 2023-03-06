import React from "react";
import {  Col, Card } from "react-bootstrap";

const LeftSideBar = () => {
  return (  
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
  );
};

export default LeftSideBar;