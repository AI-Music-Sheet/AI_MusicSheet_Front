import React from 'react';
import '../styles/Header.css'

function Header() {
  return (
    <div className="header">
        <div className="logo">
          <img src="ai_musicsheet_front\src\assets\AI_Music_Sheet_LOGO.png" alt="logo-img" />
        </div>
      <div className="auth-buttons">
        <button className='btn'>Log In</button>
        <button className='btn'>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
