import React from "react";

function AccountInfo() {
  return (
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
  );
}

export default AccountInfo;
