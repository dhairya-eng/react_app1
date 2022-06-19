import React from 'react'
import { useState } from 'react'
import "./navbar.css"
//api url: https://assessment.api.vweb.app/rides
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Navbar() {
  const[name,setName]=useState('')
  const[userimg,setimg]=useState('');
  fetch("https://assessment.api.vweb.app/user").then(Response=>Response.json()).then((data)=>{
      setName("Roth Ray");
      setimg(data.url);
  })
  return (
    <div className='navbar'>
       <Link to="/" className='title'><h1>Edvora</h1></Link>
      <div className="user">
        <p>{name}</p>
        <img src={userimg} alt="#"></img>
      </div>
    </div>
  )
}

export default Navbar