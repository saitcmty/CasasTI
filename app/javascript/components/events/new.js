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
    newEvent.append("finish", finish);
    newEvent.append("description", description);
    newEvent.append("portrait", portrait);
    newEvent.append("link", link);

    try {
      const response = await axios.post(`${backendURL}/events`, newEvent, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
      <EventForm formFunction={createEvent} />
    </main>
  );
}
