import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [questions, setquestions] = useState([]);
  let count = 0;
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/questions/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setquestions(response.data);
        console.log(questions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function checkQuestion(event) {
    console.log(event);
    window.location.href = `/question/${event}/`;
  }
  const userQuestions = questions.filter((qustn) => qustn.id == id);
  console.log("Printing all his questions");
  console.log(userQuestions);
  return (
    <div>
      <Container fluid>
        <Row>
          <LeftSideBar />
          {/* This is the question list implemented */}
          <Col sm={8} className="mt-5">
            <Card className="p-3">
              <div className="container">
                <h1 className="title">Your Questions </h1>
              </div>
              <p></p>
              <Row>
                {userQuestions.map((question) => (
                  <Col md={12} className="d-flex flex-row" key={question.id}>
                    <Card className="questioncard mb-3">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                          <Card.Title>{question.title}</Card.Title>
                          <br />
                          <div>
                            <Badge variant="info" className="ml-2">
                              {count} See here
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
                        <span>
                          <Button
                            className="mr-2"
                            variant="success"
                            onClick={() => checkQuestion(question.id)}
                          >
                            View Question
                          </Button>
                          <Badge className="tagsInfo">{question.tags}</Badge>
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

export default Profile;
