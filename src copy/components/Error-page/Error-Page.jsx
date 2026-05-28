import React from "react";
import { BsEmojiFrownFill } from "react-icons/bs";
import { GiStarShuriken } from "react-icons/gi";
import "./Error-Page.css";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const nav = useNavigate();
  return (
    <main className="mainErrPage-container">
      <section className="err-container">
        <h1>
          4<BsEmojiFrownFill className="emoji" />4
        </h1>
        <div className="starHolder">
          <GiStarShuriken className="star" />
        </div>
      </section>
      <p>Page not Found</p>
      <span>
        Sorry, the page you're looking for doesn't exist or has been moved.
      </span>
      <button onClick={() => nav("/")} className="errBtn">
        Back to Homepage
      </button>
    </main>
  );
};

export default ErrorPage;
