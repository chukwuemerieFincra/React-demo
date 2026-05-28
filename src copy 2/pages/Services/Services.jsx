import React from "react";
import "./Services.css";
import Header from "../../components/header/header";
import ServiceCard from "../../components/card2/card2";
import Footer from "../../components/footer/footer";

const Services = () => {
  const everydayItem = [
    { id: 1, item: "Shirt", price: "₦500" },
    { id: 2, item: "T-shirt", price: "₦400" },
    { id: 3, item: "Trousers", price: "₦600" },
    { id: 4, item: "Jeans", price: "₦700" },
  ];
  const babyItem = [
    { id: 5, item: "Baby Clothes Bundles", price: "₦1,200" },
    { id: 6, item: "Baby Blanket", price: "₦1,500" },
  ];
  const faqQuestions = [
    {
      id: 1,
      num: "01",
      question: "How do I schedule a laundry pickup?",
      sign: "+",
    },
    {
      id: 2,
      num: "02",
      question: "How long does the laundry process take?",
      sign: "+",
    },
    {
      id: 3,
      num: "03",
      question: "Do you offer pickup and delivery?",
      sign: "+",
    },
    {
      id: 4,
      num: "04",
      question: "What types of clothes do you clean?",
      sign: "+",
    },
    { id: 5, num: "05", question: "How are my clothes cleaned?", sign: "+" },
    {
      id: 6,
      num: "06",
      question: "What if my clothes have stains?",
      sign: "+",
    },
    { id: 7, num: "07", question: "How do I pay for the service?", sign: "+" },
  ];
  return (
    <main className="mainService-conatainer">
      <Header />
      <div className="wrapSection-container">
        <section className="service-container">
          <span>Our Services</span>
          <h2>Expert Laundry Services Delivered Fresh</h2>
          <p>
            From quick pickups to careful cleaning and on- <br />
            time on what matters most.
          </p>
        </section>
        <ServiceCard />
        <section className="itemPricing-container">
          <h2>Item-Based Pricing</h2>
          <div className="pricing-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Items</th>
                  <th className="leftBorder">Prices</th>
                </tr>
              </thead>
              <tbody>
                <tr className="category-row">
                  <td colSpan="2">
                    <span className="minTitle">Everyday Items</span>
                  </td>
                </tr>
                {everydayItem.map((item) => (
                  <tr className="mainRightBorder" key={item.id}>
                    <td className="rightBorder">{item.item}</td>
                    <td className="leftBorder">{item.price}</td>
                  </tr>
                ))}
                <tr className="category-row">
                  <td colSpan="2">
                    <span className="minTitle">Baby Items</span>
                  </td>
                </tr>
                {babyItem.map((item) => (
                  <tr className="mainRightBorder" key={item.id}>
                    <td className="rightBorder">{item.item}</td>
                    <td className="leftBorder">{item.price}</td>
                  </tr>
                ))}
                <tr>
                  <td className="">Baby Bedding</td>
                  <td className="leftBorderDiv">
                    <span>₦1,800</span>
                    <button className="read-more">Read more</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="second-form">
          <div className="second-form-input">
            <p className="title">FAQ4</p>
            <h4 className="Questions">Got Questions? We've Got Answers</h4>
            <p className="laundry-Service">
              Everything you need to know about our laundry Service <br /> from
              pickup to delivery.
            </p>
          </div>
          <aside className="secondFormInput-container">
            {/* {" "} */}
            {faqQuestions.map((faq) => (
              <div key={faq.id} className="insideText-container">
                <p className="num">{faq.num}</p>
                <p className="midText">{faq.question}</p>
                <button className="plus">{faq.sign}</button>
              </div>
            ))}
          </aside>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Services;
