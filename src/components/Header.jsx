import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="img">
        <img src={Logo} alt="Aryan Engineers" />
        <div className="heading-info">
          <span className="heading">Aryan Engineers</span>
          <span className="hero">Manufacture of Instrument Fittings</span>
        </div>
      </div>

      <div className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`list ${menuOpen ? "open" : ""}`}>
        <ul className="items">
          <li>
            <Link to={"/"} onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to={"/product"} className="product" onClick={toggleMenu}>
              Product
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
