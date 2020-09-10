import React, { useRef } from "react";
import "./Match.css";

function Match(props) {
  const notesRef = useRef(null);

  const onClickHandler = () => {
    notesRef.current.classList.toggle("match-notes-expanded");
  };

  return (
    <div className="match" onClick={onClickHandler}>
      <div className="match-box">
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
        <p className={`match-text ${props.promo ? "promos" : "not-promos"}`}>
          P
        </p>
      </div>
      <div className="match-notes" ref={notesRef}>
        <p className="match-text match-text-notes">{props.notes}</p>
      </div>
    </div>
  );
}

export default Match;
