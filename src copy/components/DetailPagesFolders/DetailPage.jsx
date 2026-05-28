import React, { useState } from "react";
import "./Css/DetailPage.css";
import {
  RiBox3Line,
  RiUserSharedLine,
  RiLoader4Line,
  RiInboxArchiveLine,
  RiTruckLine,
} from "react-icons/ri";

const DetailPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const progressData = [
    { title: "Request", icon: <RiBox3Line /> },
    { title: "Assigned", icon: <RiUserSharedLine /> },
    { title: "Processing", icon: <RiLoader4Line /> },
    { title: "Ready", icon: <RiInboxArchiveLine /> },
    { title: "Delivered", icon: <RiTruckLine /> },
  ];

  const detailsData = [
    { title: "Client Name", value: "Ada Oluchi" },
    { title: "Contact", value: "0814565789" },
    { title: "Email", value: "adavibes@gmail.com" },
    {
      title: "Billing address",
      value: "15, Tapa Road, Isawo Agric, Ikorodu, Lagos.",
    },
    { title: "Amount", value: "N79,900" },
    { title: "Pickup Date", value: "14/03/2026" },
    { title: "Delivery Date", value: "20/03/2026" },
    { title: "Service Type", value: "Package service" },
    { title: "Driver", value: "Olisa" },
  ];

  const handleNext = () => {
    if (currentStep < progressData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="mainOrderContainer">
      <div className="topOrderHeader">
        <div className="headerLeft">
          <h2>Order ID - #10425</h2>
          <p>Order Life cycle</p>
        </div>
        <button className="closeBtn">✕</button>
      </div>

      <aside className="progressWrapper">
        {progressData.map((item, index) => (
          <section key={index} className="progressSection">
            <div
              className={`progressItem ${
                index <= currentStep ? "activeProgress" : ""
              } ${index < currentStep ? "completedProgress" : ""}`}
            >
              <div className="circle">{item.icon}</div>
              <span>{item.title}</span>
            </div>
            {index !== progressData.length - 1 && (
              <div
                className={`progressLine ${
                  index < currentStep ? "activeLine" : ""
                }`}
              ></div>
            )}
          </section>
        ))}
      </aside>

      <div className="detailsGrid">
        {detailsData.map((item, index) => (
          <div className="detailCard" key={index}>
            <h4>{item.title}</h4>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <article className="orderSection">
        <h3>Order Items</h3>
        <div className="tableHeader">
          <span>Package Type</span>
          <span>Per kg</span>
          <span>Total</span>
        </div>
        <div className="tableBody">
          <span>Deluxe Package</span>
          <span>32kg</span>
          <span>79,900</span>
        </div>
      </article>

      <section className="bottomSection">
        <button
          className="moveBackBtn"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Move Back
        </button>
        <button
          className="assignBtn"
          onClick={handleNext}
          disabled={currentStep === progressData.length - 1}
        >
          {currentStep === progressData.length - 1
            ? "Move to Next Stage"
            : "Move to Next Stage"}
        </button>
      </section>
    </main>
  );
};

export default DetailPage;
