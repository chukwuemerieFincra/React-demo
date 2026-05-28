import React from "react";
import { FaTshirt, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer2.css";

const Footer2 = () => {
  const quickLinks = ["Home", "Services", "Contact", "Pricing"];
  const openingHours = ["24 hours a day", "7 Days a week"];
  const contactInfo = [
    {
      id: 1,
      type: "address",
      icon: <FaMapMarkerAlt className="icon" />,
      value: "168 Idewu Street, Olodi-Apapa, Lagos, Nigeria, 121003",
    },
    {
      id: 2,
      type: "email",
      icon: <FaEnvelope className="icon" />,
      value: "washington@gmail.com",
    },
    {
      id: 3,
      type: "phone",
      icon: <FaPhone className="icon" />,
      value: "+234 080 688 3275",
    },
  ];
  return (
    <main className="footer2-container">
      <aside className="footer2Header-container">
        <img src="/src/assets/Washington-logo.png" className="footer2-logo" />
        <h2>Washington</h2>
      </aside>
      <div className="footer2-right-container">
        <section className="footer2Main-container">
          <span>
            Your trusted laundry service for easy pickup and spotless cleaning.
            Delivering fresh clothes and convenience every day.
          </span>
        </section>
        <div className="footer2-section">
          <h3>Quick links</h3>
          <ul>
            {quickLinks.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
        <div className="footer2-section">
          <h3>Get in touch</h3>
          <ul className="contact-info">
            {contactInfo.map((info, index) => (
              <li key={index}>
                {info.icon}
                {info.value}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer2-section">
          <h3>Opening hours</h3>
          <ul>
            {openingHours.map((open, index) => (
              <li key={index}>{open}</li>
            ))}
          </ul>
        </div>
        <div className="newsletter">
          <h3>Join a Newsletter</h3>
          <label htmlFor="emai">Your Email</label>
          <input type="email" placeholder="Enter email address" />
          <button className="btnSubscribe">Subscribe</button>
        </div>
      </div>
      <section className="footerWrap">
        <div className="border"></div>
        <p className="copy">© 2026 WASHINGTON Ltd</p>
      </section>
    </main>
  );
};

export default Footer2;
