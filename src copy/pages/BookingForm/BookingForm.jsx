import React from "react";
import header from "../../components/header/header";
import "../BookingForm/BookingForm.css";
import Header from "../../components/header/header";
import Footer2 from "../../components/Footer2/Footer2";

const BookingForm = () => {
  return (
    <main className="mainBooking">
      <Header />
      <section className="Booking-from">
        <div className="main-from">
          {" "}
          <article className="first-from">
            <div className="Booking">
              <h1>Booking from</h1>
              <p className="schedule">
                schedule a pick up for yout laundry and{" "}
                <span className="schedule-down">
                  we'll take care of the rest
                </span>
              </p>
            </div>
            <div className="first-from-down">
              {" "}
              <div className="number"></div>
              <div className="info-box">
                <div className="laundry-pickup">
                  {" "}
                  <p1 className="p1">Schedule your laundry pickup</p1>{" "}
                  <p2 className="p2">
                    fill in the details below and we will pick your laundry at
                    your preferred time.
                  </p2>
                </div>
                <div className="main-info">
                  <div className="main-info-left">
                    {" "}
                    <div className="Text-input-1">
                      <label>First name</label>
                      <input
                        className="input-1"
                        type="text"
                        placeholder="John"
                      />
                    </div>{" "}
                    <div className="Text-input-1">
                      <label>Email Address</label>
                      <input
                        className="input-1"
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="Text-input-1">
                      <label>Pickup Date</label>
                      <input className="input-1" type="text" placeholder="" />
                    </div>
                    <div className="Text-input-1">
                      <label>Service Type</label>
                      <input
                        className="input-1"
                        type="text"
                        placeholder="Select Option"
                      />
                    </div>
                  </div>
                  <div className="main-info-right">
                    <div className="Text-input-2">
                      <label>Surname</label>
                      <input
                        className="input-2"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                    <div className="Text-input-2">
                      <label>phone Number</label>
                      <input
                        className="input-2"
                        type="text"
                        placeholder="+234 000 000 0000"
                      />
                    </div>
                    <div className="Text-input-2">
                      <label>pickup Time</label>
                      <input className="input-2" type="text" placeholder="" />
                    </div>
                    <div className="Text-input-3">
                      <label>Special instructions</label>
                      <input
                        className="input-3"
                        type="text"
                        placeholder="Type here"
                      />
                    </div>
                  </div>
                </div>
                <div className="Schedule-btn">
                  <button className="btn-pickup">Schedule pickup</button>
                </div>
              </div>
            </div>
          </article>
          <article className="second-from">
            <div className="second-from-input">
              <div className="second-from-input-text">
                <p className="FAQ4">FAQ4</p>
                <h4 className="Questions">Got Questions?We've Got Answers</h4>
                <p className="laundry-Service">
                  Everything you need to know about our laundry Service.
                </p>
                <p className="pickup-delivery">from pickup to delivery.</p>
              </div>
              <div className="second-from-input-1">
                {" "}
                <div className="inside-text">
                  <p className="puls">01</p>
                  <p className="middle-text">
                    How do i schedule a laundry pickup?
                  </p>
                  <p className="puls">+</p>
                </div>
                <div className="inside-text">
                  <p className="puls">02</p>
                  <p className="middle-text">
                    How long dose the laundry process take?
                  </p>
                  <p className="puls">+</p>
                </div>
                <div className="inside-text">
                  <p className="puls">03</p>
                  <p className="middle-text">
                    Do you offer pickup and delivery?
                  </p>
                  <p className="puls">+</p>
                </div>
                <div className="inside-text">
                  <p className="puls">04</p>
                  <p className="middle-text">
                    what types of clothes do you clean?
                  </p>
                  <p className="puls">+</p>
                </div>
                <div className="inside-text">
                  <p className="puls">05</p>
                  <p className="middle-text">How are my clothes do cleaned?</p>
                  <p className="puls">+</p>
                </div>
                <div className="inside-text">
                  <p className="puls">06</p>
                  <p className="middle-text">what if my cloths have stains?</p>
                  <p className="puls">+</p>
                </div>
                <div className="inside-text">
                  <p className="puls">07</p>
                  <p className="middle-text">How do i pay for thr service?</p>
                  <p className="puls">+</p>
                </div>
              </div>
            </div>
          </article>
          <article className="third-from">
            {" "}
            <div className="third-from-left">
              <div className="third-from-left-input">
                <div className="third-from-left-input-main">
                  <div className="third-from-left-input-1">
                    <div className="Text-input-4">
                      <label>Name</label>
                      <input
                        className="input-4"
                        type="text"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="Text-input-4">
                      <label>Mobile</label>
                      <input
                        className="input-4"
                        type="text"
                        placeholder="+234 000 000 0000"
                      />
                    </div>
                  </div>
                  <div className="third-from-left-input-2">
                    <div className="Text-input-4">
                      <label>Email Address</label>
                      <input
                        className="input-4"
                        type="text"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="Text-input-4">
                      <label>Subject</label>
                      <input
                        className="input-4"
                        type="text"
                        placeholder="Ex: appreciation"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="Text-input-5">
                    <label>Subject</label>
                    <input
                      className="input-5"
                      type="text"
                      placeholder="Ex: appreciation"
                    />
                  </div>
                </div>
                <div className="third-from-left-input-btn">
                  <button className="Send-btn">Send message</button>
                </div>
              </div>
            </div>
            <div className="third-from-right">
              <div className="map-img">
                <img className="map-image" src="/src/assets/map.png" alt="" />
              </div>
              <div className="map-icons">
                {" "}
                <div className=" connect">Connect with us on</div>{" "}
                <div className="icones-app">
                  <img className="App-png" src="/src/assets/App.png" alt="" />
                </div>
              </div>
            </div>
          </article>
          {/* <article className="forth-from"></article>
        <article className="last-from"></article> */}
        </div>
      </section>
      <Footer2 />
    </main>
  );
};

export default BookingForm;
