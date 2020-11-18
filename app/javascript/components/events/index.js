import React, { useState, useEffect } from "react";
import EventSummary from "./summary";
import "../../App.css";

export default function EventsIndex(props) {
  const { events, backendURL } = props;
  events.sort((a, b) => (a.start_date > b.start_date ? 1 : -1));

  return (
    <main className="container">
      <a id="new-event" className="button-component" href="/events/new">
        <span>NUEVO EVENTO</span>
        <i className="material-icons md-36 md-dark">arrow_forward_ios</i>
      </a>

      <div className="row">
        <section id="all-events-panel" className="panel-component">
          <p className="label">EVENTOS:</p>
          <div id="next-events-container" className="elements-container">
            {events.map((event) => (
              <EventSummary
                key={event.id}
                event={event}
                showControls={true}
                backendURL={backendURL}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
