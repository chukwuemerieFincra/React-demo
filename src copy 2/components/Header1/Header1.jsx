import React, { useState } from "react";
import "./Header1.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Header1 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="Header-one">
      <section className="Header-main">
        <div className="The-logo">
          <h1 className="text">
            <span className="img">
              <img
                className="image"
                src="/src/assets/logo99.png"
                alt="Washington Logo"
              />
            </span>
            Washington
          </h1>
        </div>
        <div className="Search-bar">
          <div className="Search-input">
            <IoSearchOutline className="search-icon" />
            <input
              className="input-search"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search orders with customer's name, contact or ID"
            />
          </div>
        </div>
        <div className="id-icone">
          <div className="bell">
            <FaRegBell />
          </div>
          <div className="id">
            <div className="profile">
              <img className="jpeg"src="src/assets/id.jpeg" alt="" />
            </div>
            <div className="profile-text">
              <h1 className="Emmaunella">Emmaunella</h1>
              <p className="Admin">Admin</p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header1;
