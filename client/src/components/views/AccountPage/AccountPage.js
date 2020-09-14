import React, { useEffect, useState } from "react";
import Axios from "axios";
import Sidebar from "../LandingPage/Sections/Sidebar/Sidebar";
import "../LandingPage/LandingPage.css";
import "./AccountPage.css";
import Match from "./Sections/Match/Match";
import MatchForm from "./Sections/MatchForm/MatchForm";
import AccountInfo from "./Sections/AccountInfo/AccountInfo";

function AccountPage(props) {
  const [accountFound, setAccountFound] = useState(true);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    Axios.get(`/api/account/${props.match.params.accountId}`).then(
      (response) => {
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

  useEffect(() => {
    Axios.get(`/api/match/${props.match.params.accountId}`).then((response) => {
      if (response.data.success) {
        setMatches(response.data.matches);
      }
    });
  }, []);

  const updateMatches = () => {
    Axios.get(`/api/match/${props.match.params.accountId}`).then((response) => {
      if (response.data.success) {
        console.log(response.data.matches);
        setMatches(response.data.matches);
      }
    });
  };

  const content = () => {
    if (accountFound) {
      return (
        <div className="account-main">
          <AccountInfo
            accountId={props.match.params.accountId}
            matches={matches}
          />
          <div className="account-matches">
            <MatchForm
              accountId={props.match.params.accountId}
              updateMatches={updateMatches}
            />
            <div className="account-matches-box">
              {matches.map((match, index) => {
                return (
                  <Match
                    accountId={props.match.params.accountId}
                    matchId={match._id}
                    result={match.result}
                    champion={match.champion}
                    opponent={match.opponent}
                    lane={match.lane}
                    lp={match.lpChange}
                    promo={match.promo}
                    notes={match.notes}
                    date={match.date}
                    updateMatches={updateMatches}
                    key={`match-${index}`}
                  />
                );
              })}
            </div>
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
