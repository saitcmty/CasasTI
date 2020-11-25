import React from "react";
import axios from "axios";
import EvidenceForm from "./_form";
import "../../App.css";

export default function NewEvidence(props) {
  const { backendURL } = props;

  const createEvidence = (evidence) => {
    const { points, title, deadline } = evidence;

    const newEvidence = new FormData();
    newEvidence.append("title", title);
    newEvidence.append("points", points);
    newEvidence.append("deadline", deadline);

    axios
      .post(`${backendURL}/evidences`, newEvidence, {
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
      <EvidenceForm formFunction={createEvidence} />
    </main>
  );
}
