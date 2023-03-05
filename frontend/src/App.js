import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
function App(){
  return(
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App