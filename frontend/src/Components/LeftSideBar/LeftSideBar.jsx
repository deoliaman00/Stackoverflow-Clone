import React from "react";
import {  Col, Card } from "react-bootstrap";

const LeftSideBar = () => {
  return (
    <Col sm={1} className="bg-light mt-3">
      <Card className="p-2 bg-warning mb-3">
        <h5>
          Hot Topics <hr />
        </h5>
        <p>NFT</p>
        <p>QUANT</p>
        <p>ML</p>
        <p>AI</p>
        <p>WEB 3</p>
      </Card>
      <Card className="p-2 bg-warning mb-3">
        <h5>
          Most Searched <hr />
        </h5>
        <p>DRF</p>
        <p>AWS</p>
        <p>GIT</p>
        <p>HFT</p>
        <p>FAANG</p>
      </Card>
      <Card className="p-2 bg-warning mb-3">
        <h5>
          Coming Soon <hr />
        </h5>
        <p>AR</p>
        <p>VR</p>
        <p>3D-Printing</p>
        <p>Genomics</p>
        <p>AI-Images</p>
      </Card>
    </Col>
  );
};

export default LeftSideBar;