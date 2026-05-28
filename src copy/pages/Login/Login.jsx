import { useNavigate } from "react-router-dom";
import "./login.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState({
    error: false,
    name: "",
    msg: "",
  });

  const handleEmail = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const catchEmail = e.target.value;

    setUserInfo({ ...userInfo, email: catchEmail });

    if (catchEmail.trim() === "") {
      setErrMsg({
        error: true,
        name: "email",
        msg: "Enter your email",
      });
    } else if (!emailRegex.test(catchEmail)) {
      setErrMsg({
        error: true,
        name: "email",
        msg: "Enter a valid email address",
      });
    } else {
      setErrMsg({
        error: false,
        name: "",
        msg: "",
      });
    }
  };

  const handlePassword = (e) => {
    const catchPassword = e.target.value;

    setUserInfo({ ...userInfo, password: catchPassword });

    if (catchPassword.trim() === "") {
      setErrMsg({
        error: true,
        name: "password",
        msg: "Enter your password",
      });
    } else if (catchPassword.length < 6) {
      setErrMsg({
        error: true,
        name: "password",
        msg: "Password must be at least 6 characters",
      });
    } else {
      setErrMsg({
        error: false,
        name: "",
        msg: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = "https://washington-1.onrender.com/api/v1/admin/signIn";

    if (userInfo.email.trim() === "") {
      setErrMsg({
        error: true,
        name: "email",
        msg: "Enter your email",
      });
      return;
    }
    if (userInfo.password.trim() === "") {
      setErrMsg({
        error: true,
        name: "password",
        msg: "Enter your password",
      });
      return;
    }
    if (!errMsg.error) {
      try {
        const res = await axios.post(API_URL, userInfo);

        const { ...adminData } = res.data.admin;

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("admin", JSON.stringify(adminData));

        nav("/dashboard");
      } catch (error) {
        console.error("Login failed:", error);

        setErrMsg({
          error: true,
          name: "password",
          msg: "Invalid email or password",
        });
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="authForm-container" onSubmit={handleSubmit}>
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
              onChange={handleEmail}
            />

            <span style={{ color: "red", fontFamily: "Arial" }}>
              {errMsg.msg && errMsg.name === "email" ? errMsg.msg : ""}
            </span>
          </section>
          <section className="wrapAuth-container">
            <label htmlFor="password">Password</label>

            <div className="authInput-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="auth-input"
                placeholder="enter your password"
                required
                onChange={handlePassword}
              />

              <button
                type="button"
                className="toggle_password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <span style={{ color: "red", fontFamily: "Arial" }}>
              {errMsg.msg && errMsg.name === "password" ? errMsg.msg : ""}
            </span>

            <div className="authCheck-container1">
              <input type="checkbox" className="auth-check1" />

              <span>Remember me</span>

              <aside className="forgetHolder">
                <span onClick={() => nav("/forgot-password")}>
                  Forget Password
                </span>
              </aside>
            </div>
          </section>
        </main>

        <div className="authButton-container">
          <button type="submit" className="auth-btn">
            Sign in
          </button>

          <p>
            Don't have an account?
            <span onClick={() => nav("/Signup")}>Sign Up</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
