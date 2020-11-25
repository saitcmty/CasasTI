import React from "react";
import axios from "axios";
import EventForm from "./_form";
import "../../App.css";

export default function NewEvent(props) {
  const { backendURL } = props;

  const createEvent = async (event) => {
    const { title, place, start, finish, description, portrait, link } = event;

    const newEvent = new FormData();
    newEvent.append("title", title);
    newEvent.append("place", place);
    newEvent.append("start", start);
    if (finish) newEvent.append("finish", finish);
    if (description) newEvent.append("description", description);
    if (portrait) newEvent.append("portrait", portrait);
    if (link) newEvent.append("link", link);

    axios
      .post(`${backendURL}/events`, newEvent, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => alert(JSON.stringify(error)))
      .then((resNew) => {
        alert(resNew.data.msg);
        window.location = "/events";
      });
  };

  return (
    <main id="new-event-form" className="container mt-5 mb-5">
      <EventForm formFunction={createEvent} />
    </main>
  );
}
