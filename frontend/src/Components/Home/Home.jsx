import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [questions, setquestions] = useState([]);
  let count = 0;
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/questions/',{
      headers:{
        "Content-Type":"application/json",
      },
    }).then((response)=>{
      setquestions(response.data);
      console.log(questions);
    }).catch((error)=>{
      console.log(error);
    });
  },[]);

  function checkLogin() {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      window.location.href = "/question";
    }
  }
  function checkQuestion(event) {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      window.location.href = `/question/${event}/`;
    }
  }

  
  return (
    <div>
      <Container fluid>
        <Row>
          <LeftSideBar />
          {/* This is the question list implemented */}
          <Col sm={8} className="mt-3">
            <Card className="p-3">
              <div className="container">
                <h1 className="title">Questions </h1>
                  <button className="Questionbtn" onClick={checkLogin}>
                    Create Question
                  </button>
              </div>
              <p></p>
              <Row>
                {questions.map((question) => (
                  <Col md={12} className="d-flex flex-row" key={question.id}>
                    <Card className="questioncard mb-3">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                          <Card.Title>{question.title}</Card.Title>
                          <br />
                          <div>
                            <Badge variant="info" className="ml-2">
                              {question.upvotes} upvotes
                            </Badge>{" "}
                            <Badge variant="info" className="ml-2">
                              {question.downvotes} downvotes
                            </Badge>{" "}
                            <Badge variant="info" className="ml-2">
                              {question.num_answers} answers
                            </Badge>
                          </div>
                        </div>
                        <Card.Text>{question.body}</Card.Text>
                        <span className="qustnInfo">
                            <Button className="mr-2 view-question-btn" variant="success" onClick={()=>checkQuestion(question.id)} >View Question</Button>
                          {" "}<Badge  className="tagsInfo">
                            {question.tags}
                          </Badge>
                          <Badge className="author">Author: {question.user}</Badge>
                        </span>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
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
