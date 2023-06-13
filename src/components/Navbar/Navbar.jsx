import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { IonIcon } from "@ionic/react";
import { planetOutline, closeCircle } from "ionicons/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // Toggle navigation Bar
  // const [show, setShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !menuRef.current.contains(event.target) &&
        event.target.className !== "navbar-toggle"
      ) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header-container">
            <h1 className="header-logo">
              <IonIcon icon={planetOutline} />
              Travel.
            </h1>
            <ul
              className={`navbar ${isMenuOpen ? "is-show" : ""}`}
              ref={menuRef}
            >
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
            </ul>
            {/* <div className="navbar-close">
              <IonIcon icon={closeCircle} />
              <FontAwesomeIcon icon={faClose} />
            </div> */}
            <div
              className="navbar-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="navbar-btn">
              <a href="#" className="btn btn--primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
