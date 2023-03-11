import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import axios from "axios";
import "./Question.css"
const Question = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");
  const [tags, setTags] = useState("");

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

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  const handleTagsChange = (event) => {
    setTags(event.target.value);
    getUserDetails();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/questions/create/", {
        title: title,
        body: body,
        user: user,
        tags: tags,
      })
      .then((response) => {
        console.log("Data successfully posted to API!");
        window.location.href="/"
      })
      .catch((error) => {
        alert("Couldn't upload the question");
        console.log("Error posting data to API:", error);
      });
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <LeftSideBar />
          {/* This is the question list implemented */}
          <Col sm={8} className="mt-5">
            <h1>Create a Question</h1>
            <div className="formDiv">
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Title :</label>
                  <input
                    type="text"
                    class="form-control input-sm"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Body :</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    type="textfield"
                    value={body}
                    onChange={handleBodyChange}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Tags :</label>
                  <select name="tags" value={tags} onChange={handleTagsChange}>
                    <option value="">-- Select a tag --</option>
                    <option value="NS">NODEJS</option>
                    <option value="DJ">Django</option>
                    <option value="FB">Facebook</option>
                    <option value="HU">Heroku</option>
                    <option value="IS">ISRO</option>
                    <option value="JS">JavaScript</option>
                    <option value="PHP">PHP</option>
                  </select>
                </div>
                <div className="mt-5">
                  <button class="btn btn-success btn-lg" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Col>
          {/* Here we have implemented the right bar */}
          <RightSideBar />
        </Row>
      </Container>
    </div>
  );
};

export default Question;
