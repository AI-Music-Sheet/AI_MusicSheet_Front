import React from "react";
import '../styles/SignUp.css';

function SignUp() {
  return (
    <div className="signup-screen">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>

        <div className="input-row">
          <input className="signup-input" type="text" placeholder="ID" />
          <button className="check-btn">Check</button>
        </div>

        <input className="signup-input" type="text" placeholder="Name" />
        
        <div className="input-row">
          <input className="signup-input" type="text" placeholder="Nickname" />
          <button className="check-btn">Check</button>
        </div>

        <input className="signup-input" type="password" placeholder="Password" />
        <input className="signup-input" type="password" placeholder="Confirm Password" />

        <div className="input-row">
          <input className="signup-input" type="email" placeholder="Email" />
          <button className="check-btn">Check</button>
        </div>

        <button className="signup-btn">Sign Up!</button>
      </div>
    </div>
  );
}

export default SignUp;
