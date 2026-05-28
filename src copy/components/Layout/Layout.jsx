import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header1 from "../../components/Header1/Header1";
import Sidebar from "../../components/Layout/Sidebar";
import "./Layout.css";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`dashboard-main ${!sidebarOpen ? "expanded" : ""}`}>
        <Header1 onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
