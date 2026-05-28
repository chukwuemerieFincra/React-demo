import React from "react";
import "./Order.css";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import DataTable from "../../components/DataTable/DataTable";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import { useNavigate } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

const Order = () => {
  const navigate = useNavigate();
  const rows = [
    {
      id: 1,
      orderId: "#10425",
      name: "Delight Nursery School",
      contact: "081234567889",
      status: "Scheduled",
      driver: "Olisa",
    },
    {
      id: 2,
      orderId: "#10425",
      name: "Ada Oluchi",
      contact: "081234567889",
      status: "Scheduled",
      driver: "Gbemi",
    },
    {
      id: 3,
      orderId: "#10425",
      name: "Febechi Pascal",
      contact: "081234567889",
      status: "In Progress",
      driver: "Olisa",
    },
    {
      id: 4,
      orderId: "#10425",
      name: "Onye Grace",
      contact: "081234567889",
      status: "Completed",
      driver: "Nanu",
    },
    {
      id: 5,
      orderId: "#10425",
      name: "Ogunsunya Micheal",
      contact: "081234567889",
      status: "Processing",
      driver: "Olisa",
    },
    {
      id: 6,
      orderId: "#10425",
      name: "Onyim & Sons Law Firm",
      contact: "081234567889",
      status: "Completed",
      driver: "Nanu",
    },
    {
      id: 7,
      orderId: "#10425",
      name: "Ebere Sunday",
      contact: "081234567889",
      status: "Cancelled",
      driver: "Gbemi",
    },
    {
      id: 8,
      orderId: "#10425",
      name: "Oluchi Olisa",
      contact: "081234567889",
      status: "Completed",
      driver: "Gbemi",
    },
    {
      id: 9,
      orderId: "#10425",
      name: "Pelumi Gbenga",
      contact: "081234567889",
      status: "Scheduled",
      driver: "Nanu",
    },
  ];

  const columns = [
    { key: "orderId", label: "Order ID" },
    { key: "name", label: "Client Name" },
    { key: "contact", label: "Contact" },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    { key: "driver", label: "Driver Name" },
  ];

  return (
    <div className="Order">
      <div className="Order-header">
        <button
          className="order-btn"
          onClick={() => navigate("/dashboard/createorder")}
        >
          <span className="order-btn-icon">
            <FiPlus />
          </span>
          Create order
        </button>
        <div className="pickup-delivery-toolbar-left">
          <button className="pickup-delivery-chip">
            <FiFilter /> Filter by
          </button>
          <button className="pickup-delivery-chip">
            <HiOutlineSwitchVertical /> Sort by
          </button>
        </div>
      </div>
      <DataTable columns={columns} data={rows} getRowId={(row) => row.id} />
    </div>
  );
};

export default Order;
