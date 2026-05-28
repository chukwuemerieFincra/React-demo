import { useNavigate } from "react-router-dom";
import "./login.css";
import { GiLoincloth } from "react-icons/gi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState({
    err: false,
    name: "",
    msg: "",
  });

  const handleEmail = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const catchEmail = e.target.value;
    console.log(catchEmail);
    setUserInfo({ ...userInfo, email: catchEmail });
    if (catchEmail.trim() === "") {
      setErrMsg({
        err: true,
        name: "email",
        msg: "Enter your email",
      });
    } else if (!emailRegex.test(catchEmail)) {
      setErrMsg({
        err: true,
        name: "email",
        msg: "Enter a valid email address",
      });
    } else {
      setErrMsg({ err: false, name: "", msg: "" });
    }
  };
  const handlePassword = (e) => {
    const catchPassword = e.target.value;
    console.log(catchPassword);
    setUserInfo({ ...userInfo, password: catchPassword });
    if (catchPassword.trim() === "") {
      setErrMsg({
        err: true,
        name: "password",
        msg: "Enter your password",
      });
    } else {
      setErrMsg({ err: false, name: "", msg: "" });
    }
  };
  return (
    <div className="auth-container">
      <form className="authForm-container">
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
          <button type="submit" className="auth-btn" onClick={() => nav("/")}>
            Sign in
          </button>
          <p>
            Don't have an account?
            <span onClick={() => nav("/Signup")}>Sign Up </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
