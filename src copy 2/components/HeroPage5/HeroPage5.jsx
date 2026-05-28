import "./HeroPage5.css";
import React from "react";
import Card5 from "../Card5/Card5";
import image2 from "../../assets/image5.png";
import image1 from "../../assets/Stars1.png";
import image3 from '../../assets/image6.png'
import image4 from "../../assets/Stars2.png";

const HeroPage5 = () => {
  const card5 = [
    {
      id: 1,
      stars: image1,
      image: image2,
      description:
        "Always on time, and my clothes come  back clean and neatly folded. Laundry day is stress-free now!",
    },
    {
      id: 2,
      stars: image4,
      image: image3,
      description:
        "Booked a pickup online, and it went smoothly, Friendly staff and perfect dry cleaning. Very impressed!",
    },
  ];
  return (
    <>
      <div className="heroPage5-container">
        <div className="heroPage5-wrapper">
          <div className="heroPage5">
            <div className="heroPage5-up">
              <div className="heroPage5-up-left">
                <div className="heroPage5-up-left-up">
                  <p className="heroPage5-up-left-up-p"> Testimonial</p>
                  <h2 className="heroPage5-up-left-up-h2">
                    {" "}
                    What Our Customers <br /> Are Saying
                  </h2>
                </div>
                <div className="heroPage5-up-left-down">
                  <p className="heroPage5-up-left-down-p">
                    {" "}
                    Hear from our happy custosmers who <br /> love fresh,
                    spotles clothes delivered
                    <br />
                    straight to their door.
                  </p>
                </div>
              </div>
              <div className="heroPage5-up-right">
                {card5.map((i, idx) => (
                  <Card5
                    image={i.image}
                    key={idx}
                    description={i.description}
                    stars={i.stars}
                  />
                ))}
              </div>
            </div>
            <div className="heroPage5-down">
                <div className="heroPage5-down-imgs">
                    <img src="/src/assets/Right.png" alt=""/>
                    <img src="/src/assets/Left.png" alt=""/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage5;
