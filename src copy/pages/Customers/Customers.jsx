import { FiFilter } from "react-icons/fi";
import "./Customers.css";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import DataTable from "../../components/DataTable/DataTable";
import StatTile from "../../components/StatTile/StatTile";
import {
  MdAutorenew,
  MdEventNote,
  MdInventory2,
  MdTaskAlt,
} from "react-icons/md";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Customers = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const stats = [
    {
      title: "Total of Today Task",
      value: 145,
      subtitle: "All time orders",
      icon: <MdInventory2 />,
    },
    {
      title: "Scheduled",
      value: 78,
      subtitle: "Awaiting pickup",
      icon: <MdEventNote />,
    },
    {
      title: "In Progress",
      value: 38,
      subtitle: "Being processed",
      icon: <MdAutorenew />,
    },
    {
      title: "Completed Today",
      value: 58,
      subtitle: "Delivered orders",
      icon: <MdTaskAlt />,
    },
  ];

  const columns = [
    { key: "_id", label: "Order ID" },
    {
      key: "name",
      label: "Client Name",
      render: (row) => `${row.firstName} ${row.surname}`,
    },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
    { key: "phoneNumber", label: "Contact" },
    { key: "assignedDriver", label: "Driver Name" },
  ];

  const getAllCustomers = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://washington-1.onrender.com/api/v1/customer",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setCustomers(response.data.data);
  };

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <div className="pickup-delivery-page">
      <section className="pickup-delivery-stats">
        {stats.map((s) => (
          <StatTile
            key={s.title}
            title={s.title}
            value={s.value}
            subtitle={s.subtitle}
            icon={s.icon}
          />
        ))}
      </section>

      <section className="pickup-delivery-toolbar">
        <div className="pickup-delivery-toolbar-left">
          <button className="pickup-delivery-chip">
            <FiFilter /> Filter by
          </button>
          <button className="pickup-delivery-chip">
            <HiOutlineSwitchVertical /> Sort by
          </button>
        </div>
      </section>

      <section className="pickup-delivery-table">
        <DataTable
          columns={columns}
          data={customers}
          getRowId={(row) => row._id}
          onRowClick={(row) => navigate(`/dashboard/customers/${row._id}`)}
        />
      </section>
    </div>
  );
};

export default Customers;
