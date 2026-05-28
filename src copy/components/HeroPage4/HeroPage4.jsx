import "./HeroPage4.css";
import React from "react";
import Card3 from "../Card3/Card3";
import Card4 from "../Card4/Card4";
import img5 from "../../assets/card 1 .png";
import img6 from "../../assets/card 2.png";
import img7 from "../../assets/card4.png";
import img8 from "../../assets/card4a.png";
const HeroPage4 = () => {
  const card3 = [
    {
      id: 1,
      image: img5,
    },
    {
      id: 2,
      image: img6,
    },
  ];

  const card4 = [
    {
      id: 3,
      image: img7,
    },
  ];

  const card4a = [
    {
      id: 3,
      image: img8,
    },
  ];
  return (
    <>
      <div className="heroPage4-container">
        <div className="heroPage4-wrapper">
          <div className="heroPage4">
            <div className="heroPage4-left">
              <div className="heroPage4-left-up">
                <p className="heroPage4-left-up-p"> About Us</p>
                <h2 className="heroPage4-left-up-h2">
                  {" "}
                  Caring for Your Laundry,
                  <br /> Caring for You{" "}
                </h2>
              </div>
              <div className="heroPage4-left-center">
                <p className="heroPage4-left-center-p">
                  At Washington, We make Laundry <br />
                  effortless. From regularlaundry to
                  <br /> special garments(wedding dresses,
                  <br /> suits, delicate fabrics), and household <br />{" "}
                  items(bedding, curtains, carpets) we
                  <br /> handle every piece with care, <br /> delivering fresh,
                  sportles clothes right <br />
                  to your door, We are tusted by <br />
                  thousands of Customers.
                </p>
              </div>
              <div className="heroPage4-left-down "></div>
            </div>
            <div className="heroPage4-right">
              <div className="heroPage4-right-right">
                <div className="heroPage4-right-right-up">
                  {card3.map((i, idx) => (
                    <Card3 image={i.image} key={idx} />
                  ))}
                </div>
                <div className="heroPage4-right-right-down">
                  {card4.map((i, idx) => (
                    <Card4 image={i.image} key={idx} />
                  ))}
                </div>
              </div>
              <div className="heroPage4-right-left">
                {card4a.map((i, idx) => (
                  <Card4 image={i.image} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage4;
