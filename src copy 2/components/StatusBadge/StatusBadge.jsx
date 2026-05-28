import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  const variant = status.toLowerCase().replace(/\s+/g, "-");
  return (
    <span className={`status-badge status-${variant}`}>{status}</span>
  );
};

export default StatusBadge;
