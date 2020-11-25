import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";

export default function EvidenceForm(props) {
  const { formFunction, evidence: evidence } = props;

  const [title, setTitle] = useState(evidence ? evidence.title : "");
  const [points, setPoints] = useState(evidence ? evidence.points : "");
  const [deadline, setDeadline] = useState(
    evidence && evidence.deadline ? new Date(evidence.deadline) : new Date()
  );

  const [titleError, setTitleError] = useState("");
  const [pointsError, setPointsError] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

  const formIncomplete = () => {
    let incompleteForm = false;

    if (!title) {
      incompleteForm = true;
      setTitleError("Hace falta colocar un título");
      alert("Hace falta colocar un título");
    }

    if (!points) {
      incompleteForm = true;
      setPointsError(
        "Hace falta especificar la cantidad de puntos de esta evidencia"
      );
      alert("Hace falta especificar la cantidad de puntos de esta evidencia");
    }

    if (!deadline) {
      incompleteForm = true;
      setDeadlineError("Hace falta una deadline para esta evidencia");
      alert("Hace falta una deadline para esta evidencia");
    }

    return incompleteForm;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!formIncomplete())
          formFunction({
            title,
            points,
            deadline,
          });
      }}
      autoComplete="off"
    >
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label>Puntos: </label>
            <input
              type="number"
              autoComplete="nope"
              className="form-control"
              value={points}
              onChange={(e) => {
                setPoints(e.target.value);
                setPointsError("");
              }}
            />
          </div>
          <small className="text-danger">{pointsError}</small>

          <div className="form-group">
            <label>Nombre de la evidencia: </label>
            <input
              type="text"
              autoComplete="nope"
              className="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError("");
              }}
            />
          </div>
          <small className="text-danger">{titleError}</small>

          <div className="form-group">
            <label>Deadline: </label>
            <DatePicker
              selected={deadline}
              onChange={(deadline) => {
                setDeadline(deadline);
                setDeadlineError("");
              }}
              dateFormat="dd MMMM yyyy h:mm aa"
              showTimeInput
              calendarClassName="w-100"
              placeholderText={moment(deadline)
                .add(90, "minutes")
                .format("DD MMMM yyyy h:mm A")}
            />
          </div>
          <small className="text-danger">{deadlineError}</small>

          <div className="flex-grow-1"></div>

          <div className="container w-100 text-right">
            <input
              type="submit"
              value="Registrar evidencia"
              className="btn btn-primary btn-lg mt-4"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
