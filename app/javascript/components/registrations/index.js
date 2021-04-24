import React, { useState, useEffect } from "react";
import RegistrationSummary from "./summary";
import "../../App.css";

export default function RegistrationsIndex(props) {
  const { registrations, evidences, file_proofs, backendURL } = props;
  for (const i in registrations) {
    registrations[i].evidence = evidences[i];
    registrations[i].proof = file_proofs[i];
  }

  const approved_registrations = registrations.filter((r) => r.approved);
  const non_approved_registrations = registrations.filter((r) => !r.approved);

  return (
    <main className="container">
      <div className="row">
        <section id="all-registrations-panel" className="panel-component">
          <p className="label">Registros:</p>
          <div id="next-events-container" className="elements-container">
            {non_approved_registrations.map((r) => (
              <RegistrationSummary
                key={r.id}
                registration={r}
                showControls={true}
                backendURL={backendURL}
              />
            ))}

            {approved_registrations.map((r) => (
              <RegistrationSummary
                key={r.id}
                registration={r}
                backendURL={backendURL}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
