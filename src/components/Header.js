import React from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={TeslaLogo} alt="Tesla-Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-link">Model S</li>
          <li className="nav-link">Model 3</li>
          <li className="nav-link">Model X</li>
          <li className="nav-link">Model Y</li>
          <li className="nav-link">Solar Roof</li>
          <li className="nav-link">Solar Panels</li>
        </ul>
      </nav>
      <div className="right-header">
        <p>Shop</p>
        <p>Tesla Account</p>
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
