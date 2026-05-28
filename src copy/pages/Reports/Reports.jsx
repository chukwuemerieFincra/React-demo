import React from "react";
import "./Reports.css";
import {
  RiMoneyDollarCircleLine,
  RiFileList3Line,
  RiCheckboxCircleLine,
  RiUserAddLine,
} from "react-icons/ri";

const Reports = () => {
  const reportCards = [
    {
      title: "Total Revenue",
      value: "N8,847,300",
      change: "+12.5%",
      subText: "Last month: N7.2M",
      icon: <RiMoneyDollarCircleLine />,
    },
    {
      title: "Total Orders",
      value: "2,284",
      change: "+8.2%",
      subText: "Last month: 2,111",
      icon: <RiFileList3Line />,
    },
    {
      title: "Completed Orders",
      value: "2,156",
      change: "+6.8%",
      subText: "Last month: 2,019",
      icon: <RiCheckboxCircleLine />,
    },
    {
      title: "New Customers",
      value: "94",
      change: "+15.1%",
      subText: "Last month: 82",
      icon: <RiUserAddLine />,
    },
  ];
  const revenueData = [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 65 },
    { day: "Wed", value: 40 },
    { day: "Thu", value: 30 },
    { day: "Fri", value: 70 },
    { day: "Sat", value: 60 },
    { day: "Sun", value: 45 },
  ];
  const topCustomers = [
    {
      rank: "#1",
      name: "Febechi Pascal",
      orders: "647 Orders",
      spent: "N7,200,000",
    },
    {
      rank: "#2",
      name: "Pelumi Gbemga",
      orders: "189 Orders",
      spent: "N856,000",
    },
    {
      rank: "#3",
      name: "Ogunsunya Micheal",
      orders: "22 Orders",
      spent: "N665,000",
    },
    {
      rank: "#4",
      name: "Onyebuchi Law Firm",
      orders: "15 Orders",
      spent: "N350,000",
    },
    {
      rank: "#5",
      name: "Olisa Oluchi",
      orders: "12 Orders",
      spent: "N255,000",
    },
  ];
  const topServices = [
    { name: "Wash & Dry", value: 1204, percent: 85 },
    { name: "Basic Care", value: 864, percent: 60 },
    { name: "Premium Care", value: 654, percent: 45 },
    { name: "Deluxe Care", value: 324, percent: 25 },
    { name: "Dry Cleaning", value: 205, percent: 15 },
    { name: "Ironing", value: 144, percent: 10 },
  ];
  const maxRevenue = Math.max(...revenueData.map((d) => d.value));

  return (
    <main className="reportsContainer">
      <div className="reportsHeader">
        <h2>Reports & Analytics</h2>
        <span className="timeRange">This Month</span>
      </div>

      <section className="cardsGrid">
        {reportCards.map((card, index) => (
          <div className="reportCard" key={index}>
            <div className="cardTop">
              <span className="cardTitle">{card.title}</span>
              <div className="cardIcon">{card.icon}</div>
            </div>
            <div className="cardValue">
              {card.value}
              <span className="cardChange positive">{card.change}</span>
            </div>
            <p className="cardSubtext">{card.subText}</p>
          </div>
        ))}
      </section>

      <article className="chartSection">
        <h3>Revenue Over Time</h3>
        <div className="barChart">
          <section className="yAxis">
            <span>N100K</span>
            <span>N80K</span>
            <span>N60K</span>
            <span>N40K</span>
            <span>N20K</span>
            <span>N0K</span>
          </section>
          <section className="barsWrapper">
            {revenueData.map((item, index) => (
              <div className="barColumn" key={index}>
                <div
                  className="bar"
                  style={{ height: `${(item.value / maxRevenue) * 100}%` }}
                ></div>
                <span className="barLabel">{item.day}</span>
              </div>
            ))}
          </section>
        </div>
      </article>

      <section className="middleRow">
        <div className="orderStatusCard">
          <h3>Order by Status</h3>
          <div className="emptyState">
            <p>Chart placeholder</p>
          </div>
        </div>
        <div className="customerInsightsCard">
          <h3>Customer Insights</h3>
          <div className="gaugeChart">
            <div className="gauge">
              <div className="gaugeBody">
                <div className="gaugeFill"></div>
                <div className="gaugeCover">
                  <span className="gaugeValue">1780</span>
                  <span className="gaugeLabel">In Total</span>
                </div>
              </div>
            </div>
            <div className="gaugeLegend">
              <div className="legendItem">
                <span className="dot returning"></span>
                <span>512 Returning Customers</span>
              </div>
              <div className="legendItem">
                <span className="dot new"></span>
                <span>94 New Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bottomRow">
        <div className="topCustomersCard">
          <h3>Top Customers</h3>
          <div className="tableHeader">
            <span>Rank</span>
            <span>Client Name</span>
            <span>Total Orders</span>
            <span>Total Spent</span>
          </div>
          {topCustomers.map((customer, index) => (
            <div className="tableRow" key={index}>
              <span className="rank">{customer.rank}</span>
              <span>{customer.name}</span>
              <span>{customer.orders}</span>
              <span>{customer.spent}</span>
            </div>
          ))}
        </div>

        <div className="topServicesCard">
          <h3>Top Services</h3>
          {topServices.map((service, index) => (
            <div className="serviceRow" key={index}>
              <span className="serviceName">{service.name}</span>
              <div className="progressBar">
                <div
                  className="progressFill"
                  style={{ width: `${service.percent}%` }}
                ></div>
              </div>
              <span className="serviceValue">
                {service.value.toLocaleString()}
              </span>
            </div>
          ))}
          <div className="totalOrdersFooter">
            <span>Total Orders</span>
            <span className="totalValue">3,988</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reports;
