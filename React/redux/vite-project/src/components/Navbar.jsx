import React, { useContext } from 'react'
import './Navbar.css'

function Navbar() {
    const name = "abhi";
  return (
    <div className='container'>
      <div className="box">Home</div>
      <div className="box">About</div>
      <div className="box">Contact</div>
      <div className="box">{name ? "Logout" : "Login"}</div>
      <div className="box" id="username">{name ? name : "No user"}</div>
    </div>
  )
}

export default Navbar
