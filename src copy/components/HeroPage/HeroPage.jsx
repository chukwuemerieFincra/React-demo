import React from "react";
import "./HeroPage.css";

const HeroPage = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero">
          <div className="hero-left">
            <div className="hero-left-wrapper">
              <div className="hero-left-up">
                <h3 className="hero-left-up-h3">
                  Stop Doing <br />
                  Laundry Yourself,
                  <br />
                  and Start Living.
                </h3>
              </div>
              <div className="hero-left-center">
                <p className="hero-left-center-p">
                  {" "}
                  We wash, dry, and unfold your clothes so you
                  <br /> can focus what matters most.
                </p>
              </div>
              <div className="hero-left-center1">
                <p className="hero-left-center1-p">Check if we serve your area</p>
                <div className="hero-left-center1-down">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="hero-left-center1-email"
                />
                <button className="hero-left-center1-btn">submit</button>
                </div>
              </div>
              <div className="hero-left-down">
                <button className="hero-left-down-btn">Schedule pickup</button>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-right-wrapper" >
            <img className="hero-right-image" src="/src/assets/woman.png" alt="image"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
