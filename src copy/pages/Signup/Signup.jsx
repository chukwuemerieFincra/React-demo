import React, { useState } from "react";
import "../Signup/signup.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router";
import axios from "axios";

const Signup = () => {
  const [passWord, setPassWord] = useState(false);
  const nav = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.firstName.trim()) err.firstName = "First name is required";
    if (!form.lastName.trim()) err.lastName = "Last name is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email";
    }

    if (!form.password) {
      err.password = "Password is required";
    } else if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    if (form.confirmPassword !== form.password) {
      err.confirmPassword = "Passwords do not match";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    const API_URL = "https://washington-1.onrender.com/api/v1/admin";
    e.preventDefault();

    if (validate()) {
      try {
        const res = await axios.post(API_URL, form);
        console.log("Signup success:", res.data);
        nav("/login");
      } catch (error) {
        console.error("Signup failed:", error);
      }
    }
  };

  return (
    <div className="auth-container">
      <section className="login-card">
        <span className="logo">
          <div className="up">
            <h1 className="text">
              <span className="img">
                <img className="image" src="/src/assets/logo99.png" alt="" />
              </span>
              Washington
            </h1>
          </div>
          <div className="down">Create your account</div>
        </span>

        <div className="Input">
          <form className="form" onSubmit={handleSubmit}>
            <div className="Text-input">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={form.firstName}
                onChange={handleChange}
              />
              <small>{errors.firstName}</small>
            </div>

            <div className="Text-input">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Joe"
                value={form.lastName}
                onChange={handleChange}
              />
              <small>{errors.lastName}</small>
            </div>

            <div className="Text-input">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
              />
              <small>{errors.email}</small>
            </div>

            <article className="inputHolder">
              <label>Password</label>

              <div className="passWordInputHolder">
                <input
                  name="password"
                  className="input"
                  type={passWord ? "text" : "password"}
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                />

                {passWord ? (
                  <IoEye onClick={() => setPassWord(false)} className="eye" />
                ) : (
                  <IoEyeOff onClick={() => setPassWord(true)} className="eye" />
                )}
              </div>
              <small>{errors.password}</small>

              <div className="Text-input">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Repeat created password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
                <small>{errors.confirmPassword}</small>
              </div>
            </article>
          </form>
        </div>

        <div className="teams">
          <p className="span-1">
            <input className="agreeCheck" type="checkbox" name="agree" />I agree
            to the <span className="p">terms and privacy</span>
          </p>

          <div className="bottom">
            <button className="btn-1" onClick={handleSubmit}>
              Signup
            </button>
          </div>

          <span className="teams-1">
            Already have an account{" "}
            <span className="p" onClick={() => nav("/login")}>
              ? Signin
            </span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Signup;
