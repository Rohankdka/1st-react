import React from 'react';
import './navbar.css';
import Home from './Home'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#products">Products</a></li>
        <li className="navbar-item"><a href="#about">About Us</a></li>
        <li className="navbar-item"><a href="#profile">Profile</a></li>
        <button>Signup</button>
        <button>Login</button>
      </ul>    
    </nav>
    <div className='container'>
    <Home text = 'Burger' photo = './pizza.jpg'/> 
    <Home text ='pizza'photo = './pizz.jpg'/> 
    </div>
    
    </>
  );
}

export default Navbar;
