import React from "react";
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-screen">
      <div className="login-box">
        <h2 className="login-title">Log In</h2>
        <input className="login-input" type="text" placeholder="ID" />
        <input className="login-input" type="password" placeholder="PW" />
        <button className="login-btn">Enter</button>
      </div>
    </div>
  );
}

export default Login;
