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
    console.log(formEvent);

    const eventUpdate = new FormData();
    eventUpdate.append("title", title);
    eventUpdate.append("place", place);
    eventUpdate.append("start", start);
    eventUpdate.append("finish", finish);
    eventUpdate.append("description", description);
    eventUpdate.append("link", link);
    if (portrait) {
      eventUpdate.append("portrait", portrait);
    }

    try {
      if (portrait) alert("Comenzando petición, esto tomará unos segundos");
      const response = await axios.put(
        `${backendURL}/events/${event.id}`,
        eventUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.msg);
      window.location = "/events";
    } catch (error) {
      console.log(error);
      const { msg } = error.response.data;
      alert(msg);
    }
  };

  return (
    <main id="new-event-form" className="container mt-5 mb-5">
      <EventForm formFunction={updateEvent} event={event} />
    </main>
  );
}
