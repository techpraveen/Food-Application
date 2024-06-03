import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link style={{ textDecoration: "none" }} to="/">
          <img src={logo} alt="" />
        </Link>
        <p>FOOD</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("PastOrders");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/pastoders">
            PastOrders
          </Link>
          {menu === "PastOrders" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-cart">
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
