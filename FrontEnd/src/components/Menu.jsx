/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import DropDown from "./DropDown";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    console.log("clicked");
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="full-top-bar">
        <div className="sub-top-bar">
          <div className="menu-img">
            <img
              src="https://imgs.search.brave.com/kgQm8t1Lcqkl-0Ek6-zYL8GP-lQNEmCFNZVbHl5sep8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vMDg5WF9a/bmJWa0lVOE9XaXk4/aE4yNVR5N0hmWkdQ/TlRWSDh2OENSWGts/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldGbi9aWE11YzJW/bGEyeHZaMjh1L1ky/OXRMMnh2WjI4dGNH/NW4vTHpRNEx6RXZl/bVZ5YjJSby9ZUzFy/YVhSbExXeHZaMjh0/L2NHNW5YM05sWld0/c2IyZHYvTFRRNE56/QXlPQzV3Ym1j"
              alt="kite logo"
              style={{ width: "40px" }}
            />
          </div>

          <div className="links">
            <Link
              to="/dashhome/"
              className={selectedMenu === 0 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(0)}
            >
              Dashboard
            </Link>
            <Link
              to="/dashhome/orders"
              className={selectedMenu === 1 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(1)}
            >
              Orders
            </Link>
            <Link
              to="/dashhome/holdings"
              className={selectedMenu === 2 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(2)}
            >
              Holdings
            </Link>
            <Link
              to="/dashhome/positions"
              className={selectedMenu === 3 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(3)}
            >
              Positions
            </Link>
            <Link
              to="/dashhome/funds"
              className={selectedMenu === 4 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(4)}
            >
              Funds
            </Link>
            <Link
              to="/dashhome/apps"
              className={selectedMenu === 5 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(5)}
            >
              Apps
            </Link>
          </div>

          <div className="login-account">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15329/15329400.png"
              alt="User Icon"
              style={{ width: "30px" }}
            />
            <a
              href="#"
              onClick={() => {
                handleProfileClick(), handleMenuClick(6);
              }}
              className={selectedMenu === 6 ? activeMenuClass : menuClass}
            >
              USERID
            </a>
          </div>
        </div>


              {isProfileDropdownOpen ? <DropDown/> : ""}

      </div>

      
    </>
  );
};

export default Menu;
