import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import "./QuestionDetail.css";

const QuestionDetail = () => {
  const { id } = useParams();
  const [questions, setquestions] = useState([]);
  const [user, setUser] = useState("");
  const [body, setbody] = useState("");
  const [anslist,setAnslist]=useState([]);
  const onBodyChange = (e) => {
    setbody(e.target.value);
  };
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
        // window.location.href = "/";
      })
      .catch((error) => {
        alert("Couldn't upload the question");
        console.log("Error posting data to API:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/questions/${id}/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setquestions(response.data);
        getUserDetails();
        answerslist();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const Answers=anslist.filter(answer=>answer.question==id);
  return (
    <div>
      <Container fluid>
        <Row>
          <LeftSideBar />
          {/* This is the question list implemented */}
          <Col sm={8} className="mt-5">
            <div className="card mb-3 QuestionDiv">
              <div className="card-header">Question</div>
              <div className="card-body">
                <h5 className="card-title">{questions.title}</h5>
                <p className="card-text">{questions.body}</p>
                <a href="#" className="btn btn-primary m-lg-2">
                  {questions.tags}
                </a>
                <a href="#" className="btn btn-primary ml-2">
                  {questions.upvotes} upvotes
                </a>{" "}
                <a href="#" className="btn btn-primary">
                  {questions.downvotes} downvotes
                </a>
              </div>
            </div>
            

            <div class="card text-center bg-success mt-2 mb-3">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Answer the Question</h5>
                <form onSubmit={handleSubmit}>
                  <label>
                    Body:
                    <input
                      type="textfield"
                      value={body}
                      onChange={onBodyChange}
                    />
                  </label>
                  <br />
                  <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                
              </div>
              <div class="card-footer text-muted">2 days ago</div>
            </div>

            <div className="card mb-3 allAnsDiv">
              {Answers.map((ans) => (
                <>
                  <div className="card-header">Answer</div>
                  <div className="card-body ">
                    <p className="card-text">{ans.body}</p>
                    <a href="#" className="btn btn-primary m-lg-2">
                      0
                    </a>
                    <a href="#" className="btn btn-primary ml-2">
                      0
                    </a>{" "}
                    <a href="#" className="btn btn-primary">
                      0
                    </a>
                  </div>
                  <hr />
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
{/* <div className="ansDiv">
  <h1>Anwer the Question </h1>
  <form onSubmit={handleSubmit}>
    <label>
      Body:
      <input type="textfield" value={body} onChange={onBodyChange} />
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
</div>; */}