import React, { useEffect, useState } from "react";
import Axios from "axios";
import Sidebar from "../LandingPage/Sections/Sidebar/Sidebar";
import "../LandingPage/LandingPage.css";

function AccountPage(props) {
  return (
    <div className="landing-page landing-page-loggedIn">
      <div className="landing-sidebar">
        <Sidebar active={props.match.params.accountId} />
      </div>
      <div className="landing-content"></div>
    </div>
  );
}

export default AccountPage;
