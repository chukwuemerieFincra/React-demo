import "./Card1.css";
import React from "react";

const Card1 = ({ image, description }) => {
  
  return (
    <>
      <div className="card1-container">
        <div className="card1">
          <img className="card1-image" src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card1;
