import React, { useEffect, useState } from "react";
import Axios from "axios";
import Sidebar from "../LandingPage/Sections/Sidebar/Sidebar";
import "../LandingPage/LandingPage.css";
import "./AccountPage.css";

function AccountPage(props) {
  const [accountFound, setAccountFound] = useState(true);

  useEffect(() => {
    Axios.get(`/api/account/${props.match.params.accountId}`).then(
      (response) => {
        console.log(response.data.success);
        if (response.data.success) {
          if (response.data.userId !== localStorage.getItem("userId")) {
            setAccountFound(false);
          }
        } else {
          setAccountFound(false);
        }
      }
    );
  }, []);

  const content = () => {
    if (accountFound) {
      return (
        <div className="account-main">
          <div className="account-info">
            <div className="account-info-record">
              <p className="account-info-text">W/L Diff (24 hrs):</p>
              <p className="account-info-text">W/L Diff (7 days):</p>
              <p className="account-info-text">W/L Diff (30 days):</p>
            </div>
            <div className="account-info-lp">
              <p className="account-info-text">LP Diff (24 hrs):</p>
              <p className="account-info-text">LP Diff (7 days):</p>
              <p className="account-info-text">LP Diff (30 days):</p>
            </div>
            <div className="account-info-record">
              <p className="account-info-text">Top Win Rate:</p>
              <p className="account-info-text">Jungle Win Rate:</p>
              <p className="account-info-text">Mid Win Rate:</p>
              <p className="account-info-text">ADC Win Rate:</p>
              <p className="account-info-text">Support Win Rate:</p>
            </div>
          </div>
          <div className="account-matches">
            <button className="account-add-match">Add New Match</button>
          </div>
        </div>
      );
    } else {
      return <h1 className="landing-heading">Account not found!</h1>;
    }
  };

  return (
    <div className="landing-page landing-page-loggedIn">
      <div className="landing-sidebar">
        <Sidebar active={props.match.params.accountId} />
      </div>
      <div className="landing-content">{content()}</div>
    </div>
  );
}

export default AccountPage;
