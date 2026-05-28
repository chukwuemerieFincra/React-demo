import "./HeroPage3.css";
import React from "react";

const HeroPage3 = () => {
  return (
    <>
      <div className="heroPage3-container">
        <div className="heroPage3-wrapper">
          <div className="heroPage3">
            <div className="heroPage3-left">
              <img
                className="heroPage3-left-image"
                src="/src/assets/image1.png"
                alt="image"
              />
            </div>
            <div className="heroPage3-right">
              <div className="heroPage3-right-wwrapper">
                <div className="heroPage3-right-up">
                  <p className="heroPage3-right-up-p"> Why Choose Us?</p>
                  <article className="heroPage3-right-up-h2">
                    Why Customers Love Our Laundry Services{" "}
                  </article>
                </div>
                <div className="heroPage3-right-center">
                  <article className="heroPage3-right-center-p">
                    From quick pickups to careful cleaning and on-time deivery,
                    we make laundry effortless so you can focus on what matters
                    most
                  </article>
                </div>
                <div className="heroPage3-right-down">
                  <div className="heroPage3-right-down-up">
                    <div className="heroPage3-right-down-up1">
                      <div>
                        <img
                          className="heroPage3-right-down-up1-img"
                          src="/src/assets/bitcoin-icons_verify-outline.png"
                          alt=""
                        />
                      </div>
                      <span className="heroPage3-right-down-up1-p">
                        {" "}
                        Affordable Pricing
                      </span>
                    </div>
                    <div className="heroPage3-right-down-up2">
                      <div>
                        <img
                          className="heroPage3-right-down-up2-img"
                          src="/src/assets/bitcoin-icons_verify-outline.png"
                          alt=""
                        />
                      </div>
                      <span className="heroPage3-right-down-up2-p">
                        {" "}
                        Eco-Friendly Detergents
                      </span>
                    </div>
                  </div>
                  <div className="heroPage3-right-down-down">
                    <div className="heroPage3-right-down-down1">
                      <div>
                        <img
                          className="heroPage3-right-down-down1-img"
                          src="/src/assets/bitcoin-icons_verify-outline.png"
                          alt=""
                        />
                      </div>
                      <span className="heroPage3-right-down-down1-p">
                        {" "}
                        Same-Day Services
                      </span>
                    </div>
                    <div className="heroPage3-right-down-down2">
                      <div>
                        <img
                          className="heroPage3-right-down-down2-img"
                          src="/src/assets/bitcoin-icons_verify-outline.png"
                          alt=""
                        />
                      </div>
                      <span className="heroPage3-right-down-down2-p">
                        {" "}
                        Same-Day Services
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage3;
