import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "../../App.css";

export default function RegistrationSummary(props) {
  const { registration, backendURL } = props;
  const {
    id,
    student_id,
    evidence,
    justification,
    proof,
    approved,
  } = registration;

  const [registrationPoints, setRegistrationPoints] = useState("");

  const approveRegistration = (e) => {
    e.preventDefault();
    let approveForm = {};
    if (registrationPoints) approveForm.assigned_points = registrationPoints;
    axios
      .post(`${backendURL}/registrations/${id}/approve`, approveForm)
      .catch((error) => alert(JSON.stringify(error)))
      .then((resApprove) => {
        alert(resApprove.data.msg);
        window.location = "/registrations";
      });
  };

  const deleteRegistration = function () {
    axios
      .delete(`${backendURL}/registrations/${id}`)
      .catch((error) => alert(JSON.stringify(error)))
      .then((resDelete) => {
        alert(resDelete.data.msg);
        window.location = "/registrations";
      });
  };

  return (
    <div className="registration-component element-component">
      <div className="registration-info">
        <p className="student-tec-id">{student_id}</p>
        <p className="evidence-title">{evidence.title}</p>
      </div>

      <p className="index-justification">{justification}</p>
      {proof && (
        <a href={proof} target="_blank" className="file_proof_attachment">
          <i className="material-icons">attachment</i>
        </a>
      )}

      {!approved && (
        <>
          <form onSubmit={approveRegistration}>
            <input
              type="number"
              className="assigned_points"
              value={registrationPoints}
              placeholder={evidence.points}
              onChange={(e) => setRegistrationPoints(e.target.value)}
            />
            <button type="submit" className="btn btn-medium btn-inverse">
              <i className="material-icons">done_outline</i>
            </button>
          </form>
          <a onClick={deleteRegistration}>
            <i className="material-icons right-icon">delete</i>
          </a>
        </>
      )}
    </div>
  );
}
