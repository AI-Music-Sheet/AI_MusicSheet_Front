import React from 'react';
import '../styles/Header.css'
import logo from '../assets/Logo.png'

function Header() {
  return (
    <div className="header">
        <div className="logo">
          <img src={logo} alt="logo-img" />
        </div>
      <div className="auth-buttons">
        <button className='btn'>Log In</button>
        <button className='btn'>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
