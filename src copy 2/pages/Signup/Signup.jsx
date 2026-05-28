import React, { useState } from "react";
import "../Signup/signup.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router";

const Signup = () => {
  const [passWord, setPassWord] = useState(false);
  const nav = useNavigate();

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
          <form className="form">
            <div className="Text-input">
              <label>First name</label>
              <input type="text" placeholder="John" />
            </div>

            <div className="Text-input">
              <label>Last name</label>
              <input type="text" placeholder="Joe" />
            </div>

            <div className="Text-input">
              <label>Email address</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>

            <article className="inputHolder">
              <label>Password</label>

              <div className="passWordInputHolder">
                <input
                  name="password"
                  className="input"
                  type={passWord ? "text" : "password"}
                  placeholder="Enter password"
                />

                {passWord ? (
                  <IoEye onClick={() => setPassWord(false)} className="eye" />
                ) : (
                  <IoEyeOff onClick={() => setPassWord(true)} className="eye" />
                )}
              </div>
              <div className="Text-input">
                <label>Confirm Password</label>
                <input type="password" placeholder="Repeat created password" />
              </div>
            </article>
          </form>
        </div>
        <div className="teams">
          <p className="span-1">
            <input className="agreeCheck" type="checkbox" />I agree to the{" "}
            <span className="p">terms and privacy</span>
          </p>
          <div className="bottom">
            <button className="btn-1" onClick={() => nav("/login")}>
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
