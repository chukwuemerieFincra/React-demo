import DataTable from "../../components/DataTable/DataTable";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import "./DashboardHome.css";

const DashboardHome = () => {
  const rows = [
  { id: 1, orderId: "#10425", name: "Delight Nursery School", contact: "081234567889", status: "Scheduled", driver: "Olisa" },
  { id: 2, orderId: "#10425", name: "Ada Oluchi", contact: "081234567889", status: "Scheduled", driver: "Gbemi" },
  { id: 3, orderId: "#10425", name: "Febechi Pascal", contact: "081234567889", status: "In Progress", driver: "Olisa" },
  { id: 4, orderId: "#10425", name: "Onye Grace", contact: "081234567889", status: "Completed", driver: "Nanu" },
  // { id: 5, orderId: "#10425", name: "Ogunsunya Micheal", contact: "081234567889", status: "Processing", driver: "Olisa" },
  // { id: 6, orderId: "#10425", name: "Onyim & Sons Law Firm", contact: "081234567889", status: "Completed", driver: "Nanu" },
  // { id: 7, orderId: "#10425", name: "Ebere Sunday", contact: "081234567889", status: "Cancelled", driver: "Gbemi" },
  // { id: 8, orderId: "#10425", name: "Oluchi Olisa", contact: "081234567889", status: "Completed", driver: "Gbemi" },
  // { id: 9, orderId: "#10425", name: "Pelumi Gbenga", contact: "081234567889", status: "Scheduled", driver: "Nanu" },
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


     <div className="Dashboard">
      <div className="Dashboard-item">
        <div className="Dashboard-item-one-child">
          <div className="Total-Order">
            {" "}
            Total Orders Today{" "}
            <div className="Order-Icon">
              <img src="../src/assets/Frame 18.png" alt="" />
            </div>
          </div>
          <div className="Text-number">
            510{" "}
            <span className="Text-percentage">
              <img
                className="Percentage-Icon"
                src="../src/assets/flowbite-arrow.png"
                alt=""
              />
              1.8%
            </span>
          </div>
          <div className="yesterday">Yesterday: 180</div>
        </div>
        <div className="Dashboard-item-one-child">
          {" "}
          <div className="Total-Order">
            {" "}
            Total in Progress{" "}
            <div className="Order-Icon">
              <img src="../src/assets/Process.png" alt="" />
            </div>
          </div>
          <div className="Text-number">
            88{" "}
            <span className="Text-percentage">
              <img
                className="Percentage-Icon"
                src="../src/assets/flowbite-arrow.png"
                alt=""
              />
              0.5%
            </span>
          </div>
          <div className="yesterday">Yesterday: 58</div>
        </div>
        <div className="Dashboard-item-one-child">
          {" "}
          <div className="Total-Order">
            {" "}
            Ready for Delivery{" "}
            <div className="Order-Icon">
              <img src="../src/assets/Delivery.png" alt="" />
            </div>
          </div>
          <div className="Text-number">
            338{" "}
            <span className="Text-percentage">
              <img
                className="Percentage-Icon"
                src="../src/assets/flowbite-arrow.png"
                alt=""
              />
              1.7%
            </span>
          </div>
          <div className="yesterday">Yesterday: 123</div>
        </div>
        <div className="Dashboard-item-one-child">
          {" "}
          <div className="Total-Order">
            {" "}
            Total Revenue{" "}
            <div className="Order-Icon">
              <img src="../src/assets/Revenue.png" alt="" />
            </div>
          </div>
          <div className="Text-number-1">
            ₦968,900{" "}
            <span className="Text-percentage-1">
              <img
                className="Percentage-Icon"
                src="../src/assets/flowbite-arrow.png"
                alt=""
              />
              2.0%
            </span>
          </div>
          <div className="yesterday">Yesterday: N764,600</div>
        </div>
      </div>
      <div className="Dashboard-item-one">
        <div className="Dashboard-item-child">
          <div className="Graph">
            <h1 className="Graph-title">Revenue Analytics</h1>
            <p className="Graph-description">For Mar7th-Mar14th</p>
          </div>
          <div className="Graph-map">
            <img className="Graph-image" src="../src/assets/Chart.png" alt="" />
          </div>
        </div>
        <div className="Dashboard-item-child-two">
          <div className="Graph-subtitle">Laundry Processing</div>
          <div className="Graph-detail">
            <div className="Graph-Circle">
              <img
                className="Graph-Circle-image"
                src="../src/assets/pie chart.png"
                alt=""
              />
            </div>
            <div className="Graph-bar">
              <p className="packing-cloths">
                Washing <input className="packing-checkbox" type="checkbox" />
              </p>
              <p className="packing-cloths">
                Drying <input className="packing-checkbox" type="checkbox" />
              </p>
              <p className="packing-cloths">
                Ironing <input className="packing-checkbox" type="checkbox" />
              </p>
              <p className="packing-cloths">
                Stain Removal{" "}
                <input className="packing-checkbox" type="checkbox" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <DataTable
          columns={columns}
          data={rows}
          getRowId={(row) => row.id}
        />
   </div>
  );
};

export default DashboardHome;
