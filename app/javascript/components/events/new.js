import React from "react";
import axios from "axios";
import EventForm from "./_form";
import "../../App.css";

export default function NewEvent(props) {
  const { backendURL } = props;

  const createEvent = async (event) => {
    const { title, place, start, finish, description, imgFile, link } = event;
    let incompleteForm = false;

    if (!title) {
      incompleteForm = true;
      setTitleError("Hace falta colocar un título");
    }

    if (!place) {
      incompleteForm = true;
      setPlaceError("Hace falta especificar un lugar físico o virtual");
    }

    if (!start) {
      incompleteForm = true;
      setStartError("Hace falta especificar fecha y hora de evento");
    }

    if (incompleteForm) return;

    const newEvent = new FormData();
    newEvent.append("title", title);
    newEvent.append("place", place);
    newEvent.append("start", start);
    newEvent.append("finish", finish);
    newEvent.append("description", description);
    newEvent.append("portrait", imgFile);
    newEvent.append("link", link);

    try {
      const response = await axios.post(`${backendURL}/events`, newEvent, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.msg);
      window.location = "/admin";
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
