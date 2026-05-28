import "./HeroPage2.css";
import React from "react";
import Card1 from "../Card1/Card1";
import Img1 from "../../assets/icon3.png";
import img2 from "../../assets/icon 2.png";
import img3 from "../../assets/icon4.png";
import img4 from "../../assets/icon3.png";

const HeroPage2 = () => {
  const card1 = [
    {
      id: 1,
      image: Img1,
    },

    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img3,
    },
  ];
  return (
    <>
      <div className="HeroPage2-container">
        <div className="HeroPage2-container-wrapper">
          <h1 className="HeroPage2-container-wrapper-h1">
            {" "}
            Laundry Services Designed
            <br /> for Your Convenience
          </h1>
          <button className="HeroPage2-container-wrapper-btn">
            {" "}
            View all Services
          </button>
        </div>
      </div>
      <div className="all-heroPage2">
        <div className="all-heroPage2-wrapper">
          <div className="heroPage2">
            {card1.map((i, idx) => (
              <Card1 image={i.image} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage2;
