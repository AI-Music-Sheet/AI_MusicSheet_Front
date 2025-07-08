import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../styles/Login.css';

function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:8080/api/submit', {
        id: id,
        pw: pw
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    };
  return (
    <div className="login-screen">
      <div className="login-box">
        <h2 className="login-title">Log In</h2>
        <form onSubmit={handleLogin}>
            <input 
            className="login-input" 
            type="text" 
            placeholder="ID"
            value={id}
            required
            onChange={e=>setId(e.target.value)}
            />

            <input className="login-input"
            type="password"
            placeholder="PW"
            required
            value={pw}
            onChange={e=>setPw(e.target.value)}
            />
            
            <button className="login-btn" type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
