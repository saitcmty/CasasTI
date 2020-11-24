import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";

export default function EvidenceForm(props) {
  const { formFunction, evidence: evidence } = props;

  const [title, setTitle] = useState(evidence ? evidence.title : "");
  const [points, setPoints] = useState(evidence ? evidence.points : "");
  const [img_url, setImg_url] = useState(evidence ? evidence.img_url : "");
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
      setPointsError("Hace falta especificar la cantidad de puntos de esta evidencia");
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
            img_url,
            deadline
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
            <label>URL imagen: </label>
            <input
              type="text"
              autoComplete="nope"
              className="form-control"
              value={img_url}
              onChange={(e) => setImg_url(e.target.value)}
            />
          </div>
          

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
        
        {/*
          <div className="form-group">
            <label>Fecha de finalización: </label>
            <DatePicker
              selected={finish}
              onChange={(finish) => {
                setFinish(finish);
                setStartFinishError("");
              }}
              dateFormat="dd MMMM yyyy h:mm aa"
              showTimeInput
              calendarClassName="w-100"
              placeholderText={moment(start)
                .add(90, "minutes")
                .format("DD MMMM yyyy h:mm A")}
            />
          </div>
          <small className="text-danger">{startFinishError}</small>

          <div className="form-group">
            <label>Descripción de la evidencia: </label>
            <input
              type="text"
              autoComplete="nope"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {evidence && (
            <small className="text-warning" style={{ lineHeight: "1em" }}>
              La imagen previa continúa guardada, pero si se desea editarla se
              puede hacer aquí.
            </small>
          )}
          <input
            type="file"
            className="form-control"
            onChange={(e) => setPortrait(e.target.files[0])}
          />

          <div className="form-group">
            <label>Enlace externo: </label>
            <input
              type="text"
              autoComplete="nope"
              className="form-control"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div> */}

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
