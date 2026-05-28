import "./CustomerDetails.css";
import { useNavigate } from "react-router-dom";
import { FiX, FiMail, FiPhone, FiMapPin, FiArrowLeft } from "react-icons/fi";
import DataTable from "../../components/DataTable/DataTable";
import StatusBadge from "../../components/StatusBadge/StatusBadge";

const customer = {
  name: "Febechi Pascal",
  since: "12/09/2018",
  avatar: "/src/assets/woman2.png",
  email: "febssy@gmail.com",
  contact: "0708976654322",
  address: "24 Olowu street, Ikeja, Lagos",
  totalOrders: "58 orders",
  totalSpent: "N834,000",
  status: "Active",
  rank: "#2",
};

const orders = [
  {
    id: 1,
    orderId: "#10425",
    date: "14/03/2026",
    status: "Processing",
    amount: "N10,400",
  },
  {
    id: 2,
    orderId: "#10425",
    date: "12/03/2026",
    status: "Ready",
    amount: "N176,000",
  },
  {
    id: 3,
    orderId: "#10425",
    date: "26/01/2026",
    status: "Delivered",
    amount: "N176,000",
  },
];

const columns = [
  { key: "orderId", label: "Order ID" },
  { key: "date", label: "Date" },
  {
    key: "status",
    label: "Status",
    render: (row) => <StatusBadge status={row.status} />,
  },
  { key: "amount", label: "Amount" },
];

const CustomerDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="customer-details-page">
      <button
        type="button"
        className="customer-details-back"
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft /> Back
      </button>
      <div className="customer-details-card">
        <div className="customer-details-header">
          <h2 className="customer-details-title">Customer Details</h2>
        </div>

        <div className="customer-details-profile">
          <img
            className="customer-details-avatar"
            src={customer.avatar}
            alt={customer.name}
          />
          <div className="customer-details-profile-info">
            <h3 className="customer-details-name">{customer.name}</h3>
            <p className="customer-details-since">
              Customer since {customer.since}
            </p>
          </div>
        </div>

        <div className="customer-details-contact">
          <div className="customer-details-contact-item">
            <p className="customer-details-contact-label">
              <FiMail /> Email
            </p>
            <p className="customer-details-contact-value">{customer.email}</p>
          </div>
          <div className="customer-details-contact-item">
            <p className="customer-details-contact-label">
              <FiPhone /> Contact
            </p>
            <p className="customer-details-contact-value">{customer.contact}</p>
          </div>
          <div className="customer-details-contact-item">
            <p className="customer-details-contact-label">
              <FiMapPin /> Address
            </p>
            <p className="customer-details-contact-value">{customer.address}</p>
          </div>
        </div>

        <div className="customer-details-stats">
          <div className="customer-details-stat">
            <p className="customer-details-stat-label">Total Orders</p>
            <p className="customer-details-stat-value">
              {customer.totalOrders}
            </p>
          </div>
          <div className="customer-details-stat">
            <p className="customer-details-stat-label">Total Spent</p>
            <p className="customer-details-stat-value">{customer.totalSpent}</p>
          </div>
          <div className="customer-details-stat">
            <p className="customer-details-stat-label">Status</p>
            <StatusBadge status={customer.status} />
          </div>
          <div className="customer-details-stat">
            <p className="customer-details-stat-label">Top Customer Rank</p>
            <p className="customer-details-stat-value">{customer.rank}</p>
          </div>
        </div>

        <div className="customer-details-table">
          <DataTable
            columns={columns}
            data={orders}
            getRowId={(row) => row.id}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
