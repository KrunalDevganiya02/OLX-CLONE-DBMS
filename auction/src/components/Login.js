import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/log.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(response.data.message);
      // Handle success, e.g., show success message or redirect to dashboard
      alert("Log in Successfull");
      navigate("/show");
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      // Handle error, e.g., show error message to user
      alert(error.response.data.message);
    }
  };

  return (
    <div className="log-con">
      <div className="log">
        <h1>LogIn Page</h1>
        <input
          style={{ color: "black" }}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          style={{ color: "black" }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
