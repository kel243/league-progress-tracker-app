import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import "./Sidebar.css";

function Sidebar(props) {
  const [accounts, setAccounts] = useState([]);
  const sbRef = useRef(null);

  const onClickHandler = () => {
    sbRef.current.classList.toggle("extended");
  };

  useEffect(() => {
    if (props.user.userData && user.userData.isAuth) {
      Axios.get("/api/account/all").then((response) => {
        if (response.data.success) {
          setAccounts(response.data.accounts);
        } else {
          alert("Failed to get accounts");
        }
      });
    }
  }, []);

  return (
    <div className="sidebar" ref={sbRef} onClick={onClickHandler}>
      <a
        href="/add-account"
        className={`add-account-btn ${
          props.active === "add" ? "add-account-btn-active" : ""
        }`}
      >
        + New Account
      </a>
      {accounts.map((account, index) => {
        return (
          <a
            href={`/account/${account._id}`}
            className={`add-account-btn add-account-btn-acc ${
              props.active === account._id ? "add-account-btn-active" : ""
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
