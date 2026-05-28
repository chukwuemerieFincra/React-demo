import React from "react";
import "./card2.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ServiceCard = (props) => {
  const services = [
    {
      id: 1,
      img: "/src/assets/wash&dry.png",
      title: "Professional Washing & Drying",
      paragraph:
        "Washing and drying for everyday clothes, leaving them fresh, clean, and neatly folded.",
    },
    {
      id: 2,
      img: "/src/assets/stainRemove.png",
      title: "Stain Removal",
      paragraph:
        "Special care treatment and advanced stain treatment for stubborn marks.",
    },
  ];
  const servicesMid = [
    {
      id: 3,
      img: "/src/assets/IronPress.png",
      title: "Ironing / Pressing",
      paragraph:
        "Wrinkle-free, perfectly pressed clothes ready for work, events, or everyday wear.",
    },
    {
      id: 4,
      img: "/src/assets/dryCleaning.png",
      title: "Dry Cleaning",
      paragraph:
        "Specialized cleaning for delicate fabrics, suits, dresses, and garments that require extra care.",
    },
  ];
  const servicesBot = [
    {
      id: 5,
      img: "/src/assets/houseLaundry.png",
      title: "Household Laundry",
      paragraph:
        "Cleaning services for large household items such as bedding, curtains, duvets, and carpets.",
    },
    {
      id: 6,
      img: "/src/assets/specialGerment.png",
      title: "Special Garment Care",
      paragraph:
        "Expert cleaning for delicate and valuable garments like wedding dresses, suits, and evening gowns.",
    },
  ];

  const pricingPlans = [
    {
      id: 1,
      title: "Basic Care",
      price: "₦1,800",
      description: "For everyday wear",
      features: ["Wash & Fold", "Dry Clean", "Basic Stain Removal"],
    },
  ];
  const pricePlansMid = [
    {
      id: 2,
      title: "Premium Care",
      price: "₦3,200",
      description: "For everyday wear, office wear & delicate fabrics",
      features: [
        "Wash & Fold",
        "Dryclean",
        "Delicate Fabric Care",
        "Advanced Stain Removal",
        "Same-day removal & next-day service",
      ],
    },
  ];
  const pricePlansBot = [
    {
      id: 3,
      title: "Deluxe Care",
      price: "₦2,500",
      description: "For couture wear & delicate fabrics",
      features: ["Wash & Fold", "Dry Clean", "Advanced Stain Removal"],
    },
  ];

  return (
    <div>
      <main className="mainWrap-container">
        <article className="sectionWrap-container">
          {services?.map((data) => (
            <div key={data.id} className={`wrap-container ${props.className}`}>
              <img src={data.img} alt="" />
              <section className="titleWrap-container">
                <h2>{data.title}</h2>
                <p>{data.paragraph}</p>
              </section>
            </div>
          ))}
        </article>
        <article className="sectionWrapMid-container">
          {servicesMid?.map((data) => (
            <div key={data.id} className={`wrap-container ${props.className}`}>
              <img src={data.img} alt="" />
              <section className="titleWrap-container">
                <h2>{data.title}</h2>
                <p>{data.paragraph}</p>
              </section>
            </div>
          ))}
        </article>
        <article className="sectionWrapBot-container">
          {servicesBot?.map((data) => (
            <div key={data.id} className={`wrap-container ${props.className}`}>
              <img src={data.img} alt="" />
              <section className="titleWrap-container">
                <h2>{data.title}</h2>
                <p>{data.paragraph}</p>
              </section>
            </div>
          ))}
        </article>
      </main>

      <section className="priceWrap-container">
        <section className="service-container">
          <span>Pricing</span>
          <h2>Quality Laundry Services at Honest Prices</h2>
          <p>
            Choose a plan for regular laundry or explore our <br />
            item-based pricing.
          </p>
        </section>

        <main className="mainPrice-container">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="pricingCard-container">
              <div className="titlePrice-container">
                <h3>{plan.title}</h3>
                <p className="desc">{plan.description}</p>
              </div>
              <p className="price">
                {plan.price}
                <span> /per kg</span>
              </p>
              <button className="btnPlan">Select plan</button>
              <ul>
                <h4>Features</h4>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <IoCheckmarkCircleOutline />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {pricePlansMid.map((plan) => (
            <div key={plan.id} className="pricingCardMid-container">
              <div className="titlePriceMid-container">
                <h3>{plan.title}</h3>
                <p className="desc">{plan.description}</p>
              </div>
              <p className="price">
                {plan.price}
                <span> /per kg</span>
              </p>
              <button className="btnPlan">Select plan</button>
              <ul>
                <h4>Features</h4>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <IoCheckmarkCircleOutline />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {pricePlansBot.map((plan) => (
            <div key={plan.id} className="pricingCard-container">
              <div className="titlePrice-container">
                <h3>{plan.title}</h3>
                <p className="desc">{plan.description}</p>
              </div>
              <p className="price">
                {plan.price}
                <span> /per kg</span>
              </p>
              <button className="btnPlan">Select plan</button>
              <ul>
                <h4>Features</h4>
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <IoCheckmarkCircleOutline />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default ServiceCard;
