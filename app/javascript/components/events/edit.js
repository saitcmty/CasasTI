import React from "react";
import axios from "axios";
import EventForm from "./_form";
import "../../App.css";

export default function EditEvent(props) {
  const { backendURL, event } = props;

  const updateEvent = async (formEvent) => {
    const {
      title,
      place,
      start,
      finish,
      description,
      portrait,
      link,
    } = formEvent;

    const eventUpdate = new FormData();
    eventUpdate.append("title", title);
    eventUpdate.append("place", place);
    eventUpdate.append("start", start);
    if (finish) eventUpdate.append("finish", finish);
    if (description) eventUpdate.append("description", description);
    if (portrait) eventUpdate.append("portrait", portrait);
    if (link) eventUpdate.append("link", link);

    if (portrait) alert("Comenzando petición, esto tomará unos segundos");
    axios
      .put(`${backendURL}/events/${event.id}`, eventUpdate, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => alert(JSON.stringify(error)))
      .then((resEdit) => {
        alert(resEdit.data.msg);
        window.location = "/events";
      });
  };

  return (
    <main id="new-event-form" className="container mt-5 mb-5">
      <EventForm formFunction={updateEvent} event={event} />
    </main>
  );
}
