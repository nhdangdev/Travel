import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { IonIcon } from "@ionic/react";
import { planetOutline, closeCircle } from "ionicons/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // Toggle Navbar
  const [active, setActive] = useState("navbar");
  const handleShowNav = () => {
    setActive("navbar is-show");
  };

  // Remove Navbar
  const removeNav = () => {
    setActive("navbar");
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header-container">
            <div className="header-logo">
              <IonIcon icon={planetOutline} className="icon" />
              Travel.
            </div>
            <div className={active}>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a href="#" className="navbar-link">
                    Home
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link">
                    About
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link">
                    Shop
                  </a>
                </li>
                <li className="navbar-item">
                  <a href="#" className="navbar-link">
                    News
                  </a>
                </li>
                {/* <div className="dropdown">
                <li className="dropdown-select navbar-item">
                  <a href="#" className="dropdown-selected navbar-link">
                    Pages
                  </a>
                  <i className="fa fa-caret-down dropdown-caret"></i>
                </li>
                <div className="dropdown-list">
                  <div className="dropdown__item">Dev</div>
                  <div className="dropdown__item">Design</div>
                  <div className="dropdown__item">Tester</div>
                </div>
              </div> */}
                <li className="navbar-item">
                  <a href="#" className="navbar-link">
                    Contact
                  </a>
                </li>
                <li className="navbar-item navbar-item--btn">
                  <a href="#" className="btn btn--primary">
                    Book Now
                  </a>
                </li>
                <div className="navbar-close" onClick={removeNav}>
                  <IonIcon icon={closeCircle} />
                </div>
              </ul>
            </div>
            <div className="navbar-btn">
              <a href="#" className="btn btn--primary">
                Book Now
              </a>
            </div>
            <div className="navbar-toggle" onClick={handleShowNav}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
