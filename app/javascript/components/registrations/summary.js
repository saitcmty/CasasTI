import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "../../App.css";

export default function RegistrationsSummary(props) {
  const { registration, showControls, backendURL } = props;
  const { id, student_id, evidence_id, justification } = registration;

  console.log("REGISTRATION ====================================");
  console.log(registration);

  return (
    <div className="registration-component element-component">
      <div className="registration-info">
        <p className="student-tec-id">{student_id}</p>
        <p className="evidence-title">{evidence_id}</p>
      </div>

      <p class="index-justification">{justification}</p>

      {/* {proof && (
        <div className="registration-buttons">

          <a href={proof}>
            <i className="material-icons right-icon md-inherit">attachment</i>
          </a>

        </div>
      )} */}
    </div>
  );
}
