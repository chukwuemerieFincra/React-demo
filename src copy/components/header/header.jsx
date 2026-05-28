import React from "react";
import "./header.css";
import { useNavigate } from "react-router";

const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <header className="header-container">
        <div className="header-wrapper">
          <div className="header">
            <div className="header-left">
              <img
                className="header-left-image"
                src="/src/assets/LOGO.png"
                alt="logo"
              />
            </div>
            <div className="header-center">
              <p className="header-center-1" onClick={() => nav("/")}>
                Home
              </p>
              <p className="header-center-2" onClick={() => nav("/services")}>
                Services
              </p>
              <p
                className="header-center-3"
                onClick={() => nav("/booking-form")}
              >
                Pricing
              </p>
            </div>
            <div className="header-right">
              <button className="header-right-1" onClick={() => nav("/signup")}>
                Sign up
              </button>
              <button className="header-right-2" onClick={() => nav("/login")}>
                sign in
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
