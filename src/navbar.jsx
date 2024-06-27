import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#products">Products</a></li>
        <li className="navbar-item"><a href="#about">About Us</a></li>
        <li className="navbar-item"><a href="#profile">Profile</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
