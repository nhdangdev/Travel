import React, { useState } from "react";
import "./home.css";
import video from "../../assets/video/sky.mp4";

// Ion Icon
import { IonIcon } from "@ionic/react";
import { locationOutline } from "ionicons/icons";

// FontAweSome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faList,
  faCableCar,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

// Datetime Picker

const Home = () => {
  const [value, setValue] = useState();
  return (
    <section className="home">
      <div className="container">
        <div className="home-container">
          <div className="home-overplay">
            <video src={video} muted autoPlay loop typeof="video/mp4"></video>
            <div className="home-content">
              <p className="home-title text">Our Packages</p>
              <h1 className="home-heading tw-text-3xl tw-8">
                Search your Holiday
              </h1>
              <div className="home-input-main tw-grid">
                {/* Destination */}
                <div className="home-input-destination">
                  <label htmlFor="city">Search your destination:</label>
                  <div className="home-input tw-flex tw-justify-center tw-items-center">
                    <input type="text" placeholder="Enter name here....." />
                    <IonIcon
                      icon={locationOutline}
                      className="icon tw-text-3xl"
                    />
                  </div>
                </div>
                {/* Date */}
                <div className="home-input-date">
                  <label htmlFor="date">Select your date:</label>
                  <div className="home-input">
                    <input type="date" />
                  </div>
                </div>
                {/* Price */}
                <div className="home-input-price">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <label htmlFor="price">Max price:</label>
                    <h3 className="total">$5000</h3>
                  </div>
                  <div className="home-input tw-flex">
                    <input type="range" max="10000" min="1000" />
                    <IonIcon
                      icon={locationOutline}
                      className="icon tw-text-3xl"
                    />
                  </div>
                </div>
                <div className="home-fiter tw-flex tw-justify-center">
                  <FontAwesomeIcon icon={faFilter} />
                  <span>more filers</span>
                </div>
              </div>
              <div className="home-icon tw-flex tw-w-full tw-justify-between">
                <div className="rightIcon">
                  <FontAwesomeIcon icon={faCableCar} />
                  <FontAwesomeIcon icon={faFilter} />
                </div>
                <div className="leftIcon">
                  <FontAwesomeIcon icon={faCreditCard} />
                  <FontAwesomeIcon icon={faList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
