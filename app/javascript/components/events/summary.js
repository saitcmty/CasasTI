import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "../../App.css";

export default function EventSummary(props) {
  const { event, showControls, backendURL } = props;
  const { id, title, place, start } = event;

  let dateString = moment(start).locale("es").format("DD MMM");
  dateString = dateString.substring(0, dateString.length - 1);

  const deleteEvent = async () => {
    try {
      await axios.delete(`${backendURL}/events/${id}`);
      window.location = "/admin";
    } catch (error) {
      const { msg } = error.response.data;
      alert(msg);
    }
  };

  return (
    <div className="event-component element-component">
      <span className="date">{dateString}</span>
      <div className="info">
        <p className="title">{title}</p>
        <div className="icon-text-component">
          <i className="material-icons md-inherit">room</i>
          <span className="event-info">{place}</span>
        </div>
      </div>

      {showControls && (
        <div className="event-buttons">
          <a href={`events/${id}`}>
            <i className="material-icons right-icon md-inherit">
              remove_red_eye
            </i>
          </a>

          <a href={`events/${id}/edit`}>
            <i className="material-icons right-icon md-inherit">edit</i>
          </a>

          <a onClick={deleteEvent}>
            <i className="material-icons right-icon md-inherit">delete</i>
          </a>
        </div>
      )}
    </div>
  );
}
