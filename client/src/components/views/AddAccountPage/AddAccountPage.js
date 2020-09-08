import React, { useState } from "react";
import Axios from "axios";
import Sidebar from "../LandingPage/Sections/Sidebar/Sidebar";
import { withRouter } from "react-router-dom";
import "../LandingPage/LandingPage.css";
import "./AddAccountPage.css";

function AddAccountPage(props) {
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    Axios.post("/api/account", {
      accountName: name,
    }).then((response) => {
      if (response.data.success) {
        props.history.push(`/account/${response.data.id}`);
      } else {
        alert("Failed to get create new account");
      }
    });
  };

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="landing-page landing-page-loggedIn">
      <div className="landing-sidebar">
        <Sidebar active="add" />
      </div>
      <div className="landing-content">
        <form onSubmit={onSubmitHandler} className="account-form">
          <label htmlFor="accountName">Account Name</label>
          <input
            type="text"
            name="accountName"
            id="accountName"
            value={name}
            onChange={onChangeHandler}
          ></input>
          <input
            type="hidden"
            name="userId"
            id="userId"
            value={localStorage.getItem("userId")}
          ></input>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(AddAccountPage);
