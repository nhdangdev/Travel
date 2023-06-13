import React from "react";
import "./navbar.css";
import { IonIcon } from "@ionic/react";
import { planetOutline } from "ionicons/icons";

const Navbar = () => {
  return (
    <div className="wrapper">
      <section className="container">
        <div className="navbar-container">
          {/* <header className="navbar-header tw-flex tw-items-center">
            <div className="brand">
              <a href="#" className="logo">
                <h1>
                  <IonIcon icon={planetOutline} className="icon" />
                  Travel.
                </h1>
              </a>
            </div>
            <div className="navBar">
              <ul className="navList tw-flex">
                <li className="navBar-Item">
                  <a href="#" className="navLink">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </header> */}
          <header class="header">
            <div class="container">
              <div class="header-container">
                <div className="brand">
                  <a href="#" className="logo">
                    <h1>
                      <IonIcon icon={planetOutline} className="icon" />
                      Travel.
                    </h1>
                  </a>
                </div>
                <ul class="menu">
                  <li class="menu-item">
                    <a href="#" class="menu-link">
                      Home
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-link">
                      About
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-link">
                      Features
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-link">
                      Contact
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-link">
                      Help
                    </a>
                  </li>
                </ul>
                <div class="menu-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
