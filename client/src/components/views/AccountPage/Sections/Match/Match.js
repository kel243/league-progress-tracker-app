import React, { useRef } from "react";
import Axios from "axios";
import DeleteConfirm from "../../../Modals/DeleteConfirm";
import "./Match.css";

function Match(props) {
  const notesRef = useRef(null);
  const modalRef = useRef(null);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(props.date);

  let formatDate = `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} - ${
    date.getHours() + 1 < 12
      ? ("0" + (date.getHours() + 1)).slice("-2")
      : ("0" + (date.getHours() - 11)).slice("-2")
  }:${("0" + (date.getMinutes() + 1)).slice("-2")}:${(
    "0" +
    (date.getSeconds() + 1)
  ).slice("-2")}${date.getHours() + 1 > 11 ? "pm" : "am"}`;

  const onClickHandler = () => {
    notesRef.current.classList.toggle("match-notes-expanded");
  };

  const onClickDeleteHandler = () => {
    modalRef.current.style.display = "block";
  };

  return (
    <div className="match">
      <div style={{ display: "none" }} ref={modalRef}>
        <DeleteConfirm
          accountId={props.accountId}
          updateMatches={props.updateMatches}
          matchId={props.matchId}
          mode="match"
          modalRef={modalRef}
        />
      </div>
      <div className="match-box" onClick={onClickHandler}>
        <div
          className={`match-result ${
            props.result === "Victory"
              ? "match-result-victory"
              : "match-result-defeat"
          }`}
        ></div>
        <div className="match-champion-imgs">
          <img
            className="match-champion"
            src={require(`./../../../../../assets/${props.champion}.jpg`)}
            alt={props.champion}
          ></img>
          <img
            className="match-opponent"
            src={require(`./../../../../../assets/${props.opponent}.jpg`)}
            alt={props.opponent}
          ></img>
        </div>
        <div className="match-info">
          <p className="match-text">{props.lane}</p>
          <p
            className={`match-text ${
              props.lp >= 0 ? "lp-positive" : "lp-negative"
            }`}
          >
            {props.lp} LP
          </p>
        </div>
        <div className="match-btn-box">
          <button className="match-delete-btn" onClick={onClickDeleteHandler}>
            Delete
          </button>
        </div>
        <p className={`match-text ${props.promo ? "promos" : "not-promos"}`}>
          P
        </p>
        <p className="match-text match-text-date">{formatDate}</p>
      </div>
      <div className="match-notes" ref={notesRef}>
        <p className="match-text match-text-notes">{props.notes}</p>
      </div>
    </div>
  );
}

export default Match;
