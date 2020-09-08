import React from "react";
import { useSelector } from "react-redux";
import "./LandingPage.css";
import Sidebar from "./Sections/Sidebar/Sidebar";

function LandingPage() {
  const user = useSelector((state) => state.user);

  if (user.userData && !user.userData.isAuth) {
    return (
      <div className="landing-page">
        <h1 className="landing-heading">Track Your Ranked Progress</h1>
        <a className="landing-btn" href="/login">
          Login
        </a>
        <a className="landing-btn" href="/register">
          Sign Up
        </a>
      </div>
    );
  } else {
    return (
      <div className="landing-page landing-page-loggedIn">
        <div className="landing-sidebar">
          <Sidebar />
        </div>
        <div className="landing-content">
          <h1 className="landing-heading">Choose/Add Account</h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
