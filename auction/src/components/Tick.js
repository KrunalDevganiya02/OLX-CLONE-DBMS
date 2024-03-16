import React, { useEffect } from "react";
import "../style/tick.css";
import { useLocation, useNavigate } from "react-router-dom";
import t1 from "../img/tick.jpg";

function Tick() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 3000);
  }, []);

  return (
    <div className="buy-page">
      <img src={t1} alt="Product" className="product-image" /> <br />
      <h1>Product buy successfully</h1>
    </div>
  );
}

export default Tick;
