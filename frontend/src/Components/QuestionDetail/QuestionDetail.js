import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  ListGroup,
} from "react-bootstrap";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import "./QuestionDetail.css";

const QuestionDetail = () => {
  const { id } = useParams();
  const [showComments, setShowComments] = useState(false);
  const [questions, setquestions] = useState([]);
  const [user, setUser] = useState("");
  const [body, setbody] = useState("");
  const [anslist, setAnslist] = useState([]);
  const [visible, setVisible] = useState(false);
  const [commentb,setCommentb]=useState("");
  const [answer_id,setAnswer_id]=useState(null);
  const [commentAns,setcommentAns]=useState([]);

  const upVoteAnswer=(id,event)=>{
    event.preventDefault();
    console.log(`Here is the answer id: ${id}`);
    console.log("Answer Upvoted");
    const token = localStorage.getItem("access_token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const data = { upvotes: 1 };

    return axios
      .patch(`http://127.0.0.1:8000/api/answers/${id}/update/`, data, {
        headers,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data);
        throw error.response.data;
      });
  }

  const downVoteAnswer = (id, event) => {
    event.preventDefault();
    console.log(`Here is the answer id: ${id}`);
    console.log("Answer Downvoted");
    const token = localStorage.getItem("access_token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const data = { downvotes: 1 };

    return axios
      .patch(`http://127.0.0.1:8000/api/answers/${id}/update/`, data, {
        headers,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data);
        throw error.response.data;
      });
  };
  const upVoteQuestion=(e)=>{
    e.preventDefault();
    console.log("Question Upvoted");
    const token = localStorage.getItem("access_token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const data = { upvotes: 1 };

    return axios
      .patch(`http://127.0.0.1:8000/api/questions/${id}/update/`, data, {
        headers,
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data);
        throw error.response.data;
      });
  }

    const downVoteQuestion = (e) => {
      e.preventDefault();
      console.log("Question Upvoted");
      const token = localStorage.getItem("access_token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const data = { downvotes: 1 };

      return axios
        .patch(`http://127.0.0.1:8000/api/questions/${id}/update/`, data, {
          headers,
        })
        .then((response) => {
          console.log(response.data);
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error.response.data);
          throw error.response.data;
        });
    };
  

  const onBodyChange = (e) => {
    setbody(e.target.value);
  };
  const onCommentChange=(e)=>{
    setCommentb(e.target.value);
    
  }

  // Handling the comment submission to a particular answer
    function createComment(e) {
      e.preventDefault();
      const token = localStorage.getItem("access_token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const data = { body: commentb,
      answer:answer_id, };

      return axios
        .post(
          `http://127.0.0.1:8000/api/answers/${answer_id}/comments/`,
          data,
          { headers }
        )
        .then((response) => {
          console.log(response.data);
          window.location.href="/";
        })
        .catch((error) => {
          console.log(error.response.data);
          throw error.response.data;
        });
    }
  // Handling the comment section and its visibility
  const handleCommentButtonClick = (id) => {
    setVisible((visible) => !visible);
    setAnswer_id(id);
    console.log("Here is the answeId: "+ answer_id);
  };

  // Showing all the answers to the user of a particular answer
  const answerslist = () => {
    axios
      .get("http://127.0.0.1:8000/api/answers/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setAnslist(response.data);
        // console.log(`The list is as follows:- ${anslist}`);
        // const a = anslist.filter(function (i) {
        //        return i.question == id;
        //     });
        //  setAns(a);
        //  console.log(Ans);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Getting the details of the signed in user for Answer creation and all
  const getUserDetails = async () => {
    const token = localStorage.getItem("access_token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const options = {
      withCredentials: true, // add withCredentials option if API requires authentication
    };

    try {
      const response = await axios.get("http://127.0.0.1:8000/api/user/", {
        headers,
        ...options,
      });
      console.log(response.data);
      const name = response.data.id;
      setUser(name);
    } catch (error) {
      console.error(error);
    }
  };

// Function to handle the Submission of the answer posted by the user
  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("access_token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .post("http://127.0.0.1:8000/api/answers/create/", {
        body: body,
        question: id,
        author: user, // send the ID of the related Question object
      })
      .then((response) => {
        console.log("Data successfully posted to API!");
        window.location.href = "/";
      })
      .catch((error) => {
        alert("Couldn't upload the question");
        console.log("Error posting data to API:", error);
      });
  };
 const gettingComment = (id) => {
   axios
     .get(`http://127.0.0.1:8000/api/answers/${id}/comment/`, {
       headers: {
         "Content-Type": "application/json",
       },
     })
     .then((response) => {
       console.log("Here are the comments: ");
       console.log(response.data);
      setcommentAns(response.data);
       setShowComments(true);
       console.log(commentAns);
     })
     .catch((error) => {
       console.log(error);
     });
 };
  // Gets all the Data required to be rendered here in this page
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/questions/${id}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Here are the questions: ");
        console.log(response.data);
        setquestions(response.data);
        getUserDetails();
        answerslist();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // This Answers has all the Answers specific to a Question
  const Answers = anslist.filter((answer) => answer.question == id);
  console.log(Answers);

  return (
    <div>
      <Container fluid>
        <Row>
          <LeftSideBar />
          {/* This is the question list implemented */}
          <Col sm={8} className="mt-3">
            <div className="card mb-3 QuestionDiv">
              <div className="card-header">Question</div>
              <div className="card-body">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h5 style={{ margin: 0 }} className="card-title">
                    {questions.title}
                  </h5>
                  <div>
                    <a className="btn btn-primary ml-2">
                      {questions.upvotes} upvotes
                    </a>{" "}
                    <a className="btn btn-dark">
                      {questions.downvotes} downvotes
                    </a>{" "}
                  </div>
                </div>
                <p className="card-text">{questions.body}</p>
                <a className="btn btn-primary m-lg-2">{questions.tags}</a>
                <button className="btn btn-success" onClick={upVoteQuestion}>
                  Upvote
                </button>{" "}
                <button className="btn btn-light" onClick={downVoteQuestion}>
                  Downvote
                </button>{" "}
                <Badge className="author">Author: {questions.user}</Badge>{" "}
                <Badge>Created At: {questions.created_at} </Badge>
              </div>
            </div>

            <div class="card text-center bg-success mt-2 mb-3">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Answer the Question</h5>
                <form onSubmit={handleSubmit}>
                  <label>
                    Body:
                    <textarea
                      type="textfield"
                      value={body}
                      onChange={onBodyChange}
                    />
                  </label>
                  <br />
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <div class="card-footer text-muted">Contribute to Grow</div>
            </div>

            <div className="card mb-3 allAnsDiv">
              {Answers.map((ans) => (
                <>
                  <div className="card-header">Answer</div>
                  <div className="card-body ">
                    <p className="card-text">{ans.body}</p>
                    <a href="#" className="btn btn-primary m-lg-2">
                      {ans.upvotes} upvotes
                    </a>
                    <a href="#" className="btn btn-dark ml-2">
                      {ans.downvotes}
                    </a>{" "}
                    <button
                      className="btn btn-success"
                      onClick={(event) => upVoteAnswer(ans.id, event)}
                    >
                      Upvote
                    </button>{" "}
                    <button
                      className="btn btn-light"
                      onClick={(event) => downVoteAnswer(ans.id, event)}
                    >
                      Downvote
                    </button>
                    <Badge>Author: {ans.author}</Badge>{" "}
                    <button onClick={() => gettingComment(ans.id)}>
                      Show Comments:
                    </button>
                    {showComments && (
                      <Card>
                        <ListGroup variant="flush">
                          {commentAns.map((comment) => (
                            <ListGroup.Item key={comment.id}>
                              {comment.body}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card>
                    )}
                  </div>
                  {/* Handling the comment section here */}
                  <div className="commentDiv">
                    <h5>Comment Section</h5>
                    <button
                      className="btn btn-dark"
                      onClick={() => handleCommentButtonClick(ans.id)}
                    >
                      Comment Here:{" "}
                    </button>
                    {answer_id == ans.id && (
                      <form
                        className="comment-form"
                        style={{ display: visible ? "block" : "none" }}
                      >
                        <label>Comment :</label>
                        <textarea
                          className="contentArea"
                          cols="30"
                          rows="10"
                          value={commentb}
                          onChange={onCommentChange}
                        ></textarea>
                        <button
                          style={{ marginLeft: "20px" }}
                          className="btn btn-info mb-5"
                          type="submit"
                          onClick={createComment}
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </div>
                  <hr className="hrDiffer" />
                </>
              ))}
            </div>
          </Col>
          {/* Here we have implemented the right bar */}
          <RightSideBar />
        </Row>
      </Container>
    </div>
  );
};

export default QuestionDetail;
