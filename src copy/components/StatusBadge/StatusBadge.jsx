import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  const variant = status ? status.toLowerCase().replace(/\s+/g, "-") : "N/A";
  return (
    <span className={`status-badge status-${variant}`}>{status || "N/A"}</span>
  );
};

export default StatusBadge;
