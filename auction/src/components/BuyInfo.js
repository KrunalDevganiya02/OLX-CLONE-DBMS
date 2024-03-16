import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/buyinfo.css";

function BuyInfo() {
  const [customer, setCustomer] = useState({
    name: "",
    mail: "",
    mobile: null,
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const handlechange = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(path);
      await axios.put("http://localhost:8000/buy/" + path, customer);
      await axios.delete("http://localhost:8000/items/" + path);
      navigate("/tick");
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="buy-con">
      <div className="buy-info">
        <h1 className="buy-head">Enter your details for delivery</h1>
        <input
          type="text"
          onChange={handlechange}
          placeholder="Enter Your Name"
          name="name"
        />
        <br />
        <input
          name="mail"
          type="text"
          onChange={handlechange}
          placeholder="Enter Your Email"
        />
        <br />
        <input
          name="mobile"
          type="text"
          onChange={handlechange}
          placeholder="Enter Your Mobile Number"
        />
        <br />
        <input
          name="address"
          type="text"
          onChange={handlechange}
          placeholder="Enter Your Address"
        />
        <br />
        <input
          name="city"
          type="text"
          onChange={handlechange}
          placeholder="Enter Your City"
        />
        <br />
        <input
          name="state"
          type="text"
          onChange={handlechange}
          placeholder="Enter Your State"
        />
        <br />
        <input
          name="pin"
          type="number"
          onChange={handlechange}
          placeholder="Enter Your pincode"
        />
        <br />

        <button onClick={handleUpdate}>Submit</button>
      </div>
    </div>
  );
}

export default BuyInfo;
