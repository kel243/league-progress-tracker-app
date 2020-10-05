import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Sidebar.css";

function Sidebar(props) {
  const [accounts, setAccounts] = useState([]);
  const sbRef = useRef(null);

  const onClickHandler = () => {
    sbRef.current.classList.toggle("extended");
  };

  useEffect(() => {
    Axios.get("/api/account/all").then((response) => {
      if (response.data.success) {
        setAccounts(response.data.accounts);
      }
    });
  }, []);

  return (
    <div className="sidebar" ref={sbRef} onClick={onClickHandler}>
      <Link
        to="/add-account"
        className={`add-account-btn ${
          props.active === "add" ? "add-account-btn-active" : ""
        }`}
      >
        + New Account
      </Link>
      {accounts.map((account, index) => {
        return (
          <Link
            to={`/account/${account._id}`}
            className={`add-account-btn add-account-btn-acc ${
              props.active === account._id ? "add-account-btn-active" : ""
            }`}
            key={index}
          >
            {account.accountName}
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
