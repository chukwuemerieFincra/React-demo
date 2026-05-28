import "./Card4.css";
import React from "react";

const Card4 = ({ image }) => {
  return (
    <>
      <div className="card4">
        <img className="card4-image" src={image} alt="" />
      </div>
    </>
  );
};

export default Card4;
