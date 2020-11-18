import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../App.css";

export default function EventForm(props) {
  const { formFunction } = props;

  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [start, setStart] = useState(new Date());
  const [finish, setFinish] = useState(undefined);
  const [description, setDescription] = useState("");
  const [imgFile, setImgFile] = useState(undefined);
  const [link, setLink] = useState("");

  const [titleError, setTitleError] = useState("");
  const [placeError, setPlaceError] = useState("");
  const [startError, setStartError] = useState(undefined);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formFunction({
          title,
          place,
          start,
          finish,
          description,
          imgFile,
          link,
        });
      }}
      autoComplete="off"
    >
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label>Nombre del evento: </label>
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
            <label>Lugar: </label>
            <input
              type="text"
              autoComplete="nope"
              className="form-control"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
                setPlaceError("");
              }}
            />
          </div>
          <small className="text-danger">{placeError}</small>

          <div className="form-group">
            <label>Fecha de inicio: </label>
            <DatePicker
              selected={start}
              onChange={(start) => {
                setStart(start);
                setStartError("");
              }}
              dateFormat="dd MMMM yyyy h:mm aa"
              showTimeInput
              calendarClassName="w-100"
            />
          </div>
          <small className="text-danger">{startError}</small>

          <div className="form-group">
            <label>Fecha de finalización: </label>
            <DatePicker
              selected={finish}
              onChange={(finish) => setFinish(finish)}
              dateFormat="dd MMMM yyyy h:mm aa"
              showTimeInput
              calendarClassName="w-100"
              placeholderText={moment(start)
                .add(90, "minutes")
                .format("DD MMMM yyyy h:mm A")}
            />
          </div>

          <div className="form-group">
            <label>Descripción del evento: </label>
            <input
              type="text"
              autoComplete="nope"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <input
            type="file"
            className="form-control"
            onChange={(e) => setImgFile(e.target.files[0])}
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
          </div>

          <div className="flex-grow-1"></div>

          <div className="container w-100 text-right">
            <input
              type="submit"
              value="Registrar evento"
              className="btn btn-primary btn-lg mt-4"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
