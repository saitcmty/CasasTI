import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "../../App.css";

export default function EvidenceSummary(props) {
  const { evidence, showControls, backendURL } = props;
  const { id, points, title, deadline } = evidence;

  const deleteEvidence = async () => {
    try {
      await axios.delete(`${backendURL}/evidences/${id}`);
      window.location = "/admin";
    } catch (error) {
      window.location = "/admin";
    }
  };

  return (
    <div className="evidence-component element-component">
      <div className="evidence-info">
        <p className="title">{title}</p>
        <div className="icon-text-component">
          <i className="material-icons md-inherit">outlined_flag</i>
          <span className="event-info hour">{deadline}</span>
        </div>
      </div>

      <span class="evidence-points">{points}</span>

      {showControls && (
        <div className="evidence-buttons">

          <a href={`evidences/${id}/edit`}>
            <i className="material-icons right-icon md-inherit">edit</i>
          </a>

          <a onClick={deleteEvidence}>
            <i className="material-icons right-icon md-inherit">delete</i>
          </a>
        </div>
      )}
    </div>
  );
}
