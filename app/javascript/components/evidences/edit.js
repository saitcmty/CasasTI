import React from "react";
import axios from "axios";
import EvidenceForm from "./_form";
import "../../App.css";

export default function EditEvidence(props) {
  const { backendURL, evidence: evidence } = props;

  const updateEvidence = async (formEvidence) => {
    const {
      title,
      points,
      img_url,
      deadline
    } = formEvidence;
    console.log(formEvidence);

    const evidenceUpdate = new FormData();
    evidenceUpdate.append("title", title);
    evidenceUpdate.append("points", points);
    evidenceUpdate.append("img_url", img_url);
    evidenceUpdate.append("deadline", deadline);

    try {
      //alert("Comenzando petición, esto tomará unos segundos");

      const response = await axios.put(
        `${backendURL}/evidences/${evidence.id}`,
        evidenceUpdate,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.msg);
      window.location = "/evidences";
    } catch (error) {
      console.log(error);
      const { msg } = error.response.data;
      alert(msg);
    }
  };

  return (
    <main id="new-evidence-form" className="container mt-5 mb-5">
      <EvidenceForm formFunction={updateEvidence} evidence={evidence} />
    </main>
  );
}
