import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/log.css";

const Signup = () => {
  const [otp, setOTP] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post("http://localhost:8000/verify-otp", {
        email,
        otp,
      });
      console.log(response.data.message);
      // Handle success, e.g., redirect to dashboard
      alert("SignUp Successfull");

      navigate("/login");
    } catch (error) {
      console.error(
        "OTP verification failed:server e_error",
        error.response.data.message
      );
      // Handle error, e.g., show error message to user
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
      console.log(response.data.message);
      alert("otp sent succesfully");
      // Handle success, e.g., show success message or redirect to login page
    } catch (error) {
      console.error("Signup failed:", error.response.data.message);
      // Handle error, e.g., show error message to user
      alert(error.response.data.message);
    }
  };

  return (
    <div className="log-con">
      <div className="log">
        <h1>SignUp Page</h1>
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
        <button onClick={handleSignup}>Get Otp</button>
        <input
          style={{ color: "black" }}
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          placeholder="Enter your otp here"
        />
        <button onClick={handleVerifyOTP}>SignUp</button>
      </div>
    </div>
  );
};

export default Signup;
