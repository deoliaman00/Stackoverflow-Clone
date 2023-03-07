import React from "react";
import {  Col, Card } from "react-bootstrap";

const LeftSideBar = () => {
  return (
    <Col sm={1} className="bg-light mt-5">
      <Card className="p-2 bg-warning mb-3">
        <h5>
          Hot Topics <hr />
        </h5>
        <p>NFT</p>
        <p>BOAT</p>
        <p>BOAT</p>
        <p>BOAT</p>
        <p>BOAT</p>
      </Card>
      <Card className="p-2 bg-warning mb-3">
        <h5>
          Hot Topics <hr />
        </h5>
        <p>NFT</p>
        <p>BOAT</p>
        <p>BOAT</p>
        <p>BOAT</p>
        <p>BOAT</p>
      </Card>
      <Card className="p-2 bg-warning mb-3">
        <h5>
          Hot Topics <hr />
        </h5>
        <p>NFT</p>
        <p>BOAT</p>
        <p>BOAT</p>
        <p>BOAT</p>
        <p>BOAT</p>
      </Card>
    </Col>
  );
};

export default LeftSideBar;