import React from "react";
import axios from "axios";
import EvidenceForm from "./_form";
import "../../App.css";

export default function EditEvidence(props) {
  const { backendURL, evidence: evidence } = props;

  const updateEvidence = (formEvidence) => {
    const { title, points, deadline } = formEvidence;
    // console.log(formEvidence);

    const evidenceUpdate = new FormData();
    evidenceUpdate.append("title", title);
    evidenceUpdate.append("points", points);
    evidenceUpdate.append("deadline", deadline);

    axios
      .put(`${backendURL}/evidences/${evidence.id}`, evidenceUpdate, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => alert(JSON.stringify(error)))
      .then((resNewEvidence) => {
        alert(resNewEvidence.data.msg);
        window.location = "/evidences";
      });
  };

  return (
    <main id="new-evidence-form" className="container mt-5 mb-5">
      <EvidenceForm formFunction={updateEvidence} evidence={evidence} />
    </main>
  );
}
