import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Sidebar.css";

function Sidebar(props) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    Axios.get("/api/account/all").then((response) => {
      if (response.data.success) {
        setAccounts(response.data.accounts);
      } else {
        alert("Failed to get accounts");
      }
    });
  }, []);

  return (
    <div className="sidebar">
      <a
        href="/add-account"
        className={`add-account-btn ${
          props.active == "add" ? "add-account-btn-active" : ""
        }`}
      >
        + New Account
      </a>
      {accounts.map((account, index) => {
        return (
          <a
            href={`/account/${account._id}`}
            className={`add-account-btn add-account-btn-acc ${
              props.active == account._id ? "add-account-btn-active" : ""
            }`}
            key={index}
          >
            {account.accountName}
          </a>
        );
      })}
    </div>
  );
}

export default Sidebar;
