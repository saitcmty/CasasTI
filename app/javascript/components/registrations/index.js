import React, { useState, useEffect } from "react";
import RegistrationsSummary from "./summary";
import "../../App.css";

export default function RegistrationsIndex(props) {
  const { registrations, non_a_registrations, evidences, backendURL } = props;
  //registrations.sort((a, b) => (a.date > b.date ? 1 : -1));
  console.log("evidences");
  console.log(evidences);
  return (
    <main className="container">

      <div className="row">
        <section id="all-registrations-panel" className="panel-component">
          <p className="label">Registros:</p>
          <div id="next-events-container" className="elements-container">
            
            {non_a_registrations.map((registration) => (
              <RegistrationsSummary
                key={registration.id}
                registration={registration}
                showControls={true} 
                backendURL={backendURL}
              />
            ))}
            
            {registrations.map((registration) => (
              <RegistrationsSummary
                key={registration.id}
                registration={registration}
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
