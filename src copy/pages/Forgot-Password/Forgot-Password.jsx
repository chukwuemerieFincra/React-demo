import React, { useState } from "react";
import "./Forgot-Password.css";
import { useNavigate } from "react-router";
import axios from "axios";

const ForgotPassword = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrMsg] = useState({
    error: false,
    msg: "",
  });

  const handleEmail = (e) => {
    const catchEmail = e.target.value;

    setEmail(catchEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (catchEmail.trim() === "") {
      setErrMsg({
        error: true,
        msg: "Enter your email",
      });
    } else if (!emailRegex.test(catchEmail)) {
      setErrMsg({
        error: true,
        msg: "Enter a valid email address",
      });
    } else {
      setErrMsg({
        error: false,
        msg: "",
      });
    }
  };
  const handleSubmit = (e) => {
    const API_URL =
      "https://washington-1.onrender.com/api/v1/auth/forgot-password";
    e.preventDefault();

    if (email.trim() === "") {
      setErrMsg({
        error: true,
        msg: "Enter your email",
      });
      return;
    }

    if (!errorMessage.error) {
      console.log("Reset Link Sent");
      axios.post(API_URL, { email });

      nav("/login");
    }
  };

  return (
    <div className="authForgot-container">
      <form className="authFormForgot-container" onSubmit={handleSubmit}>
        <div className="authTitle-container">
          <nav className="authLogo-container">
            <img
              className="imgLogo"
              src="/src/assets/Washington-logo.png"
              alt="logo"
            />

            <p>Washington</p>
          </nav>

          <h2>Sign in to your account</h2>
        </div>

        <main className="authmain-container">
          <section className="wrapAuth-container">
            <label htmlFor="email">Email address</label>

            <input
              type="email"
              name="email"
              className="auth-input1"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={handleEmail}
            />

            <span style={{ color: "red", fontFamily: "Arial" }}>
              {errorMessage.msg}
            </span>
          </section>
        </main>

        <div className="authButton-container">
          <button type="submit" className="auth-btn">
            Send reset link
          </button>

          <p>
            Remembered it?
            <span onClick={() => nav("/login")}>Signin</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
