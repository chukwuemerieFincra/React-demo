import React, { useState } from "react";
import "../BookingForm/BookingForm.css";
import Header from "../../components/header/header";
import Footer2 from "../../components/Footer2/Footer2";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    pickupDate: "",
    pickupTime: "",
    serviceType: "",
    instruction: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^[0-9+\s]+$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.surname.trim()) {
      newErrors.surname = "Surname is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "phoneNumber number is required";
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phoneNumber number";
    }

    if (!formData.pickupDate.trim()) {
      newErrors.pickupDate = "Pickup date is required";
    }

    if (!formData.pickupTime.trim()) {
      newErrors.pickupTime = "Pickup time is required";
    }

    if (!formData.serviceType.trim()) {
      newErrors.serviceType = "Service type is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    const API_URL = "https://washington-1.onrender.com/api/v1/booking";

    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await axios.post(API_URL, formData);

        console.log("Booking Submitted Successfully:", res.data);

        // optional: reset form after success
        setFormData({
          firstName: "",
          surname: "",
          email: "",
          phoneNumber: "",
          pickupDate: "",
          pickupTime: "",
          serviceType: "",
          instruction: "",
        });

        alert("Booking successful!");
      } catch (error) {
        console.error("Booking failed:", error);

        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <main className="mainBooking">
      <Header />

      <section className="Booking-from">
        <div className="main-from">
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
              <div className="number"></div>

              <div className="info-box">
                <div className="laundry-pickup">
                  <p1 className="p1">Schedule your laundry pickup</p1>

                  <p2 className="p2">
                    fill in the details below and we will pick your laundry at
                    your preferred time.
                  </p2>
                </div>

                <div className="main-info">
                  {/* LEFT */}
                  <div className="main-info-left">
                    {/* FIRST NAME */}
                    <div className="Text-input-1">
                      <label>First name</label>

                      <input
                        className="input-1"
                        type="text"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                      />

                      <small style={{ color: "red" }}>{errors.firstName}</small>
                    </div>

                    {/* EMAIL */}
                    <div className="Text-input-1">
                      <label>Email Address</label>

                      <input
                        className="input-1"
                        type="text"
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                      />

                      <small style={{ color: "red" }}>{errors.email}</small>
                    </div>

                    {/* DATE */}
                    <div className="Text-input-1">
                      <label>Pickup Date</label>

                      <input
                        className="input-1"
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                      />

                      <small style={{ color: "red" }}>
                        {errors.pickupDate}
                      </small>
                    </div>

                    {/* SERVICE */}
                    <div className="Text-input-1">
                      <label>Service Type</label>

                      <input
                        className="input-1"
                        type="text"
                        name="serviceType"
                        placeholder="Select Option"
                        value={formData.serviceType}
                        onChange={handleChange}
                      />

                      <small style={{ color: "red" }}>
                        {errors.serviceType}
                      </small>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="main-info-right">
                    {/* SURNAME */}
                    <div className="Text-input-2">
                      <label>Surname</label>

                      <input
                        className="input-2"
                        type="text"
                        name="surname"
                        placeholder="Doe"
                        value={formData.surname}
                        onChange={handleChange}
                      />

                      <small style={{ color: "red" }}>{errors.surname}</small>
                    </div>

                    <div className="Text-input-2">
                      <label>Phone Number</label>

                      <input
                        className="input-2"
                        type="text"
                        name="phoneNumber"
                        placeholder="+234 000 000 0000"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />

                      <small style={{ color: "red" }}>
                        {errors.phoneNumber}
                      </small>
                    </div>

                    <div className="Text-input-2">
                      <label>pickup Time</label>

                      <input
                        className="input-2"
                        type="time"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleChange}
                      />

                      <small style={{ color: "red" }}>
                        {errors.pickupTime}
                      </small>
                    </div>
                    <div className="Text-input-3">
                      <label>Special instructions</label>

                      <input
                        className="input-3"
                        type="text"
                        name="instruction"
                        placeholder="Type here"
                        value={formData.instruction}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="Schedule-btn">
                  <button className="btn-pickup" onClick={handleSubmit}>
                    Schedule pickup
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer2 />
    </main>
  );
};

export default BookingForm;
