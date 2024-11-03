import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="img">
        <img src={Logo} alt="Aryan Engineers" />
      </div>
      <div className="list">
        <ul className="items">
          <Link to={"/"}>Home</Link>
          <Link to={"/product"} className="product">Product</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
