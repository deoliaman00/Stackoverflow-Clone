import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Register from './Components/Register/Register.jsx'
import Login from "./Components/Login/Login.jsx";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Question from "./Components/Question/Question.jsx"
import Logout from "./Components/Login/Logout"
import QuestionDetail from "./Components/QuestionDetail/QuestionDetail"


function App(){
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="question" element={<Question/>} />
          <Route path="question/:id" element={<QuestionDetail/>} />
          <Route path="logout" element={<Logout/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App