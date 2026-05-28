import React from "react";
import "./Forgot-Password.css";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const nav = useNavigate();
  return (
    <div className="authForgot-container">
      <form className="authFormForgot-container">
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
              onChange={""}
            />
          </section>
        </main>
        <div className="authButton-container">
          <button type="submit" className="auth-btn">
            Send reset link
          </button>
          <p>
            Remembered it?
            <span onClick={() => nav("/login")}>Signin </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
