import "./PickupDelivery.css";
import {
  MdInventory2,
  MdEventNote,
  MdAutorenew,
  MdTaskAlt,
} from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import StatTile from "../../components/StatTile/StatTile";
import DataTable from "../../components/DataTable/DataTable";
import StatusBadge from "../../components/StatusBadge/StatusBadge";

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

const rows = [
  { id: 1, orderId: "#10425", name: "Delight Nursery School", contact: "081234567889", status: "Scheduled", driver: "Olisa" },
  { id: 2, orderId: "#10425", name: "Ada Oluchi", contact: "081234567889", status: "Scheduled", driver: "Gbemi" },
  { id: 3, orderId: "#10425", name: "Febechi Pascal", contact: "081234567889", status: "In Progress", driver: "Olisa" },
  { id: 4, orderId: "#10425", name: "Onye Grace", contact: "081234567889", status: "Completed", driver: "Nanu" },
  { id: 5, orderId: "#10425", name: "Ogunsunya Micheal", contact: "081234567889", status: "Processing", driver: "Olisa" },
  { id: 6, orderId: "#10425", name: "Onyim & Sons Law Firm", contact: "081234567889", status: "Completed", driver: "Nanu" },
  { id: 7, orderId: "#10425", name: "Ebere Sunday", contact: "081234567889", status: "Cancelled", driver: "Gbemi" },
  { id: 8, orderId: "#10425", name: "Oluchi Olisa", contact: "081234567889", status: "Completed", driver: "Gbemi" },
  { id: 9, orderId: "#10425", name: "Pelumi Gbenga", contact: "081234567889", status: "Scheduled", driver: "Nanu" },
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

const PickupDelivery = () => {
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
        <button className="pickup-delivery-reassign">Re-assign Task</button>
      </section>

      <section className="pickup-delivery-table">
        <DataTable
          columns={columns}
          data={rows}
          getRowId={(row) => row.id}
        />
      </section>
    </div>
  );
};

export default PickupDelivery;
