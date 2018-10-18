import React, { Component } from "react";
import logo from "../../assets/img/Zalando_Lounge_logo.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar__iconbox">
            <a href="https://www.google.com/" className="navbar__iconbox__icon">
              <i className="fas fa-home" />
              Homepage
            </a>
            <a href="https://www.google.com/" className="navbar__iconbox__icon">
              <i className="fas fa-percent" />
              Promotion
            </a>
          </div>
          <a href="https://www.google.com/" className="navbar__logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="navbar__iconbox">
            <a href="https://www.google.com/" className="navbar__iconbox__icon">
              <i className="fas fa-user" />
              Account
            </a>
            <a href="https://www.google.com/" className="navbar__iconbox__icon">
              <i className="fas fa-shopping-bag" />
              Bag
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
