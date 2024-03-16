import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OLX
        </Link>
      </div>

      <div className="og-nav">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="nav_val">Home</div>
        </Link>
        <Link to="/show" style={{ textDecoration: "none", color: "black" }}>
          <div className="nav_val">Sell</div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <div className="nav_val">About us</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className="nav_val">Contact us</div>
        </Link>
      </div>

      <div className="logBtn">
        <Link to="/SignUp" style={{ textDecoration: "none" }}>
          <button>SignUp</button>
        </Link>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
