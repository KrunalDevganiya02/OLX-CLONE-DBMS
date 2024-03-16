import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/placeBid.css";

function One() {
  const [item, setItem] = useState({
    Name: "",
    Description: "",
    Price: null,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/")[2];

  const handlechange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8000/items/" + path, item);
      await navigate("/show");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="up">
      <div className="up-con">
        <h2>Update Bid</h2>
        <input
          type="text"
          placeholder="ItemName"
          onChange={handlechange}
          name="Name"
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handlechange}
          name="Description"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handlechange}
          name="Price"
        />
        <button onClick={handleUpdate}> Update </button>
      </div>
    </div>
  );
}

export default One;
