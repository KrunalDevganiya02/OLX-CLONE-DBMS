import React, { useState } from "react";
import axios from "axios";

const VerifyOTP = () => {
  const [otp, setOTP] = useState("");

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post("http://localhost:8000/verify-otp", {
        otp,
      });
      console.log(response.data.message);
      // Handle success, e.g., redirect to dashboard
    } catch (error) {
      console.error("OTP verification failed:", error.response.data.message);
      // Handle error, e.g., show error message to user
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <div>
        <label>Enter OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
      </div>
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default VerifyOTP;
