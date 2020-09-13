import React from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import "./DeleteConfirm.css";

function DeleteConfirm(props) {
  const onClickAccountDeleteHandler = () => {
    Axios.delete(`/api/account/${props.accountId}`).then((response) => {
      if (response.data.success) {
        props.history.push(`/`);
      }
    });
  };

  const onClickMatchDeleteHandler = () => {
    Axios.delete(`/api/match/${props.matchId}`).then((response) => {
      if (response.data.success) {
        Axios.get(`/api/match/${props.accountId}`).then((response) => {
          if (response.data.success) {
            props.modalRef.current.style.display = "none";
            props.updateMatches(response.data.matches);
          }
        });
      }
    });
  };

  const onClickCancelHandler = () => {
    props.modalRef.current.style.display = "none";
  };

  return (
    <div className="modal-background">
      <div className="modal-box">
        <h2 className="modal-heading">Are you sure?</h2>
        <div className="modal-btn-box">
          <button
            className="modal-btn modal-btn-delete"
            onClick={
              props.mode === "account"
                ? onClickAccountDeleteHandler
                : onClickMatchDeleteHandler
            }
          >
            Delete
          </button>
          <button
            className="modal-btn modal-btn-cancel"
            onClick={onClickCancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DeleteConfirm);
