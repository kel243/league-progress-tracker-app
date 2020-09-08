import React, { useEffect, useState } from "react";
import Axios from "axios";
import Sidebar from "../LandingPage/Sections/Sidebar/Sidebar";
import "../LandingPage/LandingPage.css";

function AccountPage(props) {
  const [accountFound, setAccountFound] = useState(true);

  useEffect(() => {
    Axios.get(`/api/account/${props.match.params.accountId}`).then(
      (response) => {
        console.log(response.data.success);
        if (response.data.success) {
          if (response.data.userId != localStorage.getItem("userId")) {
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
      return <h1 className="landing-heading">Account found!</h1>;
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
