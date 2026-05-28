import "./Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdLocalLaundryService,
  MdReceiptLong,
  MdSettings,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FiLogOut, FiUserPlus } from "react-icons/fi";

const mainNav = [
  { label: "Dashboard", icon: <MdSpaceDashboard />, path: "/dashboard" },
  { label: "Order", icon: <MdLocalLaundryService />, path: "/dashboard/order" },
  { label: "Customers", icon: <FaUserFriends />, path: "/dashboard/customers" },
  {
    label: "Pickup & Delivery",
    icon: <TbTruckDelivery />,
    path: "/dashboard/pickup-delivery",
  },
  { label: "Reports", icon: <MdReceiptLong />, path: "/dashboard/reports" },
  { label: "Settings", icon: <MdSettings />, path: "/dashboard/settings" },
];

const accountNav = [
  { label: "Log out", icon: <FiLogOut />, path: "/login" },
  { label: "Register", icon: <FiUserPlus />, path: "/signup" },
];

const Sidebar = () => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="sidebar-logo">
          <img
            className="sidebar-logo-image"
            src="/src/assets/LOGO.png"
            alt="Washington Laundry"
          />
        </div>

        <nav className="sidebar-nav">
          {mainNav.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.label}
                className={`sidebar-nav-item ${isActive ? "active" : ""}`}
                onClick={() => nav(item.path)}
              >
                <span className="sidebar-nav-icon">{item.icon}</span>
                <span className="sidebar-nav-label">{item.label}</span>
              </div>
            );
          })}
        </nav>

        <div className="sidebar-accounts">
          <p className="sidebar-accounts-title">Accounts</p>
          {accountNav.map((item) => (
            <div
              key={item.label}
              className="sidebar-nav-item"
              onClick={() => nav(item.path)}
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              <span className="sidebar-nav-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
