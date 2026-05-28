import React from "react";
import "./Footer1.css";

const Footer1 = () => {
  return (
    <main className="footer1-container">
      <img
        className="footer1-image"
        src="/src/assets/laundry machine.png"
        alt="Laundry Machine"
      />
      <div className="footer1-left-container">
        <h2>
          Wave Goodbye to <br /> Laundry Day
        </h2>
        <span>
          Let us take care of your laundry while you <br />
          relax, work, or enjoy your day.
        </span>
        <button className="btnFooter">Book Pickup</button>
      </div>
    </main>
  );
};

export default Footer1;
