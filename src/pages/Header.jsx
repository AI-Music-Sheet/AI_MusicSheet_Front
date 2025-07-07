import { Link } from 'react-router-dom';
import React from 'react';
import '../styles/Header.css'
import logo from '../assets/Logo.png'

function Header() {
  return (
    <div className="header">
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo-img" /></Link>
        </div>
      <div className="auth-buttons">
        <Link to="/login"><button className='btn'>Log In</button></Link>
        <Link to='/signup'><button className='btn'>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default Header;
