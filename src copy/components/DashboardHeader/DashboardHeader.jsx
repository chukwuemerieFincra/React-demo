import React from "react";
import "./DashboardHeader.css";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

const DashboardHeader = () => {
  const user = JSON.parse(localStorage.getItem("admin"));
  return (
    <header className="dashboard-header-container">
      <div className="dashboard-header-search">
        <FiSearch className="dashboard-header-search-icon" />
        <input
          type="text"
          className="dashboard-header-search-input"
          placeholder="Search orders with customer's name, contact or ID"
        />
      </div>

      <div className="dashboard-header-right">
        <button className="dashboard-header-bell" aria-label="Notifications">
          <FiBell />
          <span className="dashboard-header-bell-dot" />
        </button>

        <div className="dashboard-header-user">
          <div className="dashboard-header-avatar">
            <img src="/src/assets/woman2.png" alt="User avatar" />
          </div>
          <div className="dashboard-header-user-info">
            <div className="dashboard-header-user-row">
              <p className="dashboard-header-user-name">{user.firstName}</p>
              <FiChevronDown className="dashboard-header-user-caret" />
            </div>
            <p className="dashboard-header-user-role">{user.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
