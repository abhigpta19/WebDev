// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
    backgroundColor : "blue"
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/"
            style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
