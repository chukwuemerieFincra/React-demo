import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { CiSettings } from "react-icons/ci";
import { BiSolidReport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import { MdOutlineShoppingCart, MdDashboard } from "react-icons/md";
import { TbBus } from "react-icons/tb";

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { path: "/dashboard/dashboard", name: "Dashboard", icon: <MdDashboard /> },
    {
      path: "/dashboard/order",
      name: "Order",
      icon: <MdOutlineShoppingCart />,
    },
    { path: "/dashboard/customers", name: "Customers", icon: <BsPeople /> },
    {
      path: "/dashboard/pickup-schedule",
      name: "Pickup & delivery",
      icon: <TbBus />,
    },
    { path: "/dashboard/reports", name: "Reports", icon: <BiSolidReport /> },

    {
      path: "/dashboard/error",
      name: "Error",
      icon: <RiSecurePaymentLine />,
    },

    { path: "/dashboard/settings", name: "Settings", icon: <CiSettings /> },
  ];

  return (
    <div className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <div className="sidebar-logo">
        {isOpen ? (
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
        ) : (
          <h1>ws</h1>
        )}
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            {isOpen && <span className="sidebar-text">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-divider"></div>
    </div>
  );
};

export default Sidebar;
