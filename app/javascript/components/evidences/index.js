import React, { useState, useEffect } from "react";
import EvidenceSummary from "./summary";
import "../../App.css";

export default function EvidencesIndex(props) {
  const { evidences, backendURL } = props;
  evidences.sort((a, b) => (a.deadline > b.deadline ? 1 : -1));

  return (
    <main className="container">
      <a id="new-evidence" className="button-component" href="/evidences/new">
        <span>NUEVA EVIDENCIA</span>
        <i className="material-icons md-36 md-dark">arrow_forward_ios</i>
      </a>

      <div className="row">
        <section id="all-evidences-panel" className="panel-component">
          <p className="label">EVIDENCIAS:</p>
          <div id="next-evidence-container" className="elements-container">
            {evidences.map((evidence) => (
              <EvidenceSummary
                key={evidence.id}
                evidence={evidence}
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
