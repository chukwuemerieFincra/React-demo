import "./StatTile.css";

const StatTile = ({ title, value, subtitle, icon }) => {
  return (
    <div className="stat-tile">
      <div className="stat-tile-top">
        <p className="stat-tile-title">{title}</p>
        {icon && <div className="stat-tile-icon">{icon}</div>}
      </div>
      <p className="stat-tile-value">{value}</p>
      {subtitle && <p className="stat-tile-subtitle">{subtitle}</p>}
    </div>
  );
};

export default StatTile;
