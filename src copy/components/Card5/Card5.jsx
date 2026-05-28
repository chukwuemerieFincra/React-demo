import "./Card5.css";
import React from "react";

const Card5 = ({image,description, stars}) => {
  return (
    <>
      <div className="card5-container">
        <div className="card5-wrapper">
          <div className="card5">
            <div className="card5-up">
              <div className="card5-up-left">
                <img
                  className="card5-up-left-image"
                  alt=""
                  src={image}
                />
              </div>
              <div className="card5-up-right">
                <img
                  className="card5-up-right-image"
                  src={stars}
                  alt=""
                />
              </div>
            </div>
            <div className="card5-center">
                <p  className="card5-center-p">{description}</p>
            </div>
            <div className="card5-down">  
                <div className="card5-down1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card5;
