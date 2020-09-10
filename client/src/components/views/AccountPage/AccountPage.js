import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import Sidebar from "../LandingPage/Sections/Sidebar/Sidebar";
import "../LandingPage/LandingPage.css";
import "./AccountPage.css";

function AccountPage(props) {
  const [accountFound, setAccountFound] = useState(true);
  const formRef = useRef(null);
  const btnRef = useRef(null);
  const xRef = useRef(null);

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

  const onClickHandler = () => {
    formRef.current.classList.toggle("invisible");
    btnRef.current.classList.toggle("invisible");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

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
            <button
              className="account-add-match"
              onClick={onClickHandler}
              ref={btnRef}
            >
              Add New Match
            </button>
            <div className="account-add-match-box invisible" ref={formRef}>
              <span
                className="account-form-close"
                ref={xRef}
                onClick={onClickHandler}
              >
                x
              </span>
              <form
                className="account-add-match-form"
                onSubmit={onSubmitHandler}
              >
                <label className="account-label" htmlFor="result">
                  Result
                  <select className="account-input" name="result" id="result">
                    <option value="Victory" selected>
                      Victory
                    </option>
                    <option value="Defeat">Defeat</option>
                  </select>
                </label>

                <label className="account-label" htmlFor="champion">
                  Champion
                  <select
                    className="account-input"
                    name="champion"
                    id="champion"
                  >
                    <option value="Aatrox" selected>
                      Aatrox
                    </option>
                    <option value="Ahri">Ahri</option>
                    <option value="Akali">Akali</option>
                    <option value="Alistar">Alistar</option>
                    <option value="Amumu">Amumu</option>
                    <option value="Anivia">Anivia</option>
                    <option value="Annie">Annie</option>
                  </select>
                </label>

                <label className="account-label" htmlFor="opponent">
                  Opponent
                  <select
                    className="account-input"
                    name="opponent"
                    id="opponent"
                  >
                    <option value="Aatrox" selected>
                      Aatrox
                    </option>
                    <option value="Ahri">Ahri</option>
                    <option value="Akali">Akali</option>
                    <option value="Alistar">Alistar</option>
                    <option value="Amumu">Amumu</option>
                    <option value="Anivia">Anivia</option>
                    <option value="Annie">Annie</option>
                  </select>
                </label>

                <label className="account-label" htmlFor="lane">
                  Lane
                  <select className="account-input" name="lane" id="lane">
                    <option value="Top" selected>
                      Top
                    </option>
                    <option value="Jungle">Jungle</option>
                    <option value="Mid">Mid</option>
                    <option value="ADC">ADC</option>
                    <option value="Support">Support</option>
                  </select>
                </label>

                <label className="account-label" htmlFor="lp">
                  LP Change
                  <input
                    className="account-input"
                    type="number"
                    name="lp"
                    id="lp"
                  ></input>
                </label>

                <label className="account-label" htmlFor="promo">
                  Promos
                  <select className="account-input" name="promo" id="promo">
                    <option value="True" selected>
                      True
                    </option>
                    <option value="False">False</option>
                  </select>
                </label>
                <div className="account-notes">
                  <label
                    className="account-label account-label-notes"
                    htmlFor="notes"
                  >
                    Notes
                  </label>
                  <textarea name="notes" id="notes"></textarea>
                </div>
              </form>
              <button type="submit" className="account-add-match">
                Create Match
              </button>
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
