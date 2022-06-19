import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react'
//https://assessment.api.vweb.app/rides
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App1() {
  return (
    <Router>
    <div className='App'>
      <Routes>
       <Route path="/" element={<Navbar/>}>
       </Route> 
       {/* <Route path='/home' element={<Home/>}/> */}
      </Routes>
      <Home/>
    </div>
    </Router>
  )
}

export default App1