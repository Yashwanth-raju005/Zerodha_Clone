import React from "react";
import zerodhalogo from "../../public/asserts/logo.svg";
import hamburger from "../../public/asserts/HamBurger.png";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-sub">
        <div className="nav-left">
          <Link to="/">
            <img src={zerodhalogo} alt="" style={{ width: "20%" }} />
          </Link>
        </div>

        <div className="nav-right ">
          <Link to="/signup" className="text-decoration-none">
            Signup
          </Link>
          <Link to="/about" className="text-decoration-none">
            About
          </Link>
          <Link to="/products" className="text-decoration-none">
            Products
          </Link>
          <Link to="pricing" className="text-decoration-none">
            Pricing
          </Link>
          <Link to="/support" className="text-decoration-none">
            Support
          </Link>
          <Link to='' className="text-decoration-none">
            <img src={hamburger} alt="" style={{ width: "4%" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
