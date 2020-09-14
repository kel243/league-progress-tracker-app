import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import DeleteConfirm from "../../../Modals/DeleteConfirm/DeleteConfirm";
import EditModal from "../../../Modals/EditModal/EditModal";

function AccountInfo(props) {
  const [todayWL, setTodayWL] = useState(0);
  const [todayLP, setTodayLP] = useState(0);
  const [weekWL, setWeekWL] = useState(0);
  const [weekLP, setWeekLP] = useState(0);
  const [monthWL, setMonthWL] = useState(0);
  const [monthLP, setMonthLP] = useState(0);
  const [topWR, setTopWR] = useState(0);
  const [jungleWR, setJungleWR] = useState(0);
  const [midWR, setMidWR] = useState(0);
  const [adcWR, setAdcWR] = useState(0);
  const [supportWR, setSupportWR] = useState(0);

  const [accountName, setAccountName] = useState(props.name);

  const modalDeleteRef = useRef(null);
  const modalEditRef = useRef(null);

  useEffect(() => {
    Axios.get(`/api/account/info/progress/${props.accountId}`).then(
      (response) => {
        if (response.data.success) {
          setTodayWL(response.data.todayWL);
          setTodayLP(response.data.todayLP);
          setWeekWL(response.data.weekWL);
          setWeekLP(response.data.weekLP);
          setMonthWL(response.data.monthWL);
          setMonthLP(response.data.monthLP);
        }
      }
    );

    Axios.get(`/api/account/info/lanes/${props.accountId}`).then((response) => {
      if (response.data.success) {
        setTopWR(response.data.topWR);
        setJungleWR(response.data.jungleWR);
        setMidWR(response.data.midWR);
        setAdcWR(response.data.adcWR);
        setSupportWR(response.data.supportWR);
      }
    });
  }, [props.matches]);

  const onClickDeleteHandler = () => {
    modalDeleteRef.current.style.display = "block";
  };

  const onClickEditHandler = () => {
    modalEditRef.current.style.display = "block";
  };

  return (
    <div className="account-info">
      <div style={{ display: "none" }} ref={modalDeleteRef}>
        <DeleteConfirm
          accountId={props.accountId}
          mode="account"
          modalRef={modalDeleteRef}
        />
      </div>
      <div style={{ display: "none" }} ref={modalEditRef}>
        <EditModal
          name="why"
          accountId={props.accountId}
          mode="account"
          modalRef={modalEditRef}
        />
      </div>
      <div className="account-info-record">
        <p className="account-info-text">W/L Diff (24 hrs): {todayWL}</p>
        <p className="account-info-text">W/L Diff (7 days): {weekWL}</p>
        <p className="account-info-text">W/L Diff (30 days): {monthWL}</p>
      </div>
      <div className="account-info-lp">
        <p className="account-info-text">LP Diff (24 hrs): {todayLP}</p>
        <p className="account-info-text">LP Diff (7 days): {weekLP}</p>
        <p className="account-info-text">LP Diff (30 days): {monthLP}</p>
      </div>
      <div className="account-info-record">
        <p className="account-info-text">Top Win Rate: {topWR}%</p>
        <p className="account-info-text">Jungle Win Rate: {jungleWR}%</p>
        <p className="account-info-text">Mid Win Rate: {midWR}%</p>
        <p className="account-info-text">ADC Win Rate: {adcWR}%</p>
        <p className="account-info-text">Support Win Rate: {supportWR}%</p>
      </div>
      <div className="account-btn-box">
        <button
          className="account-btn account-edit-btn"
          onClick={onClickEditHandler}
        >
          Edit
        </button>
        <button
          className="account-btn account-delete-btn"
          onClick={onClickDeleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default withRouter(AccountInfo);
