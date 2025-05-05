import React, { useContext } from 'react'
import './Navbar.css'
import { UserContext } from '../../../context-api/src/contexts/UserContext';

function Navbar() {
    alert("navbar rendered");
    const {name} = useContext(UserContext);
  return (
    <div className='container'>
      <div className="box">Home</div>
      <div className="box">About</div>
      <div className="box">Contact</div>
      <div className="box">Login</div>
      <div className="box" id="username">{name ? name : "No user"}</div>
    </div>
  )
}

export default Navbar
