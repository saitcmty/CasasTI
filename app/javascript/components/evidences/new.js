import React from "react";
import axios from "axios";
import EvidenceForm from "./_form";
import "../../App.css";

export default function NewEvidence(props) {
  const { backendURL } = props;

  const createEvidence = async (evidence) => {
    const { points, title, img_url, deadline } = evidence;

    const newEvidence = new FormData();
    newEvidence.append("title", title);
     newEvidence.append("points", points);
     newEvidence.append("img_url", img_url);
     newEvidence.append("deadline", deadline);
    // newEvidence.append("description", description);
    // newEvidence.append("portrait", portrait);
    // newEvidence.append("link", link);

    try {
      const response = await axios.post(`${backendURL}/evidences`, newEvidence, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
      <EvidenceForm formFunction={createEvidence} />
    </main>
  );
}
