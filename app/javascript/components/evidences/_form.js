// import React, { useState } from "react";
// import moment from "moment";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "../../App.css";

// export default function EventForm(props) {
//   const { formFunction, event } = props;

//   const [title, setTitle] = useState(event ? event.title : "");
//   const [place, setPlace] = useState(event ? event.place : "");
//   const [start, setStart] = useState(
//     event && event.start ? new Date(event.start) : new Date()
//   );
//   const [finish, setFinish] = useState(
//     event && event.finish ? new Date(event.finish) : undefined
//   );
//   const [description, setDescription] = useState(
//     event ? event.description : ""
//   );
//   const [portrait, setPortrait] = useState(undefined);
//   const [link, setLink] = useState(event ? event.link : "");

//   const [titleError, setTitleError] = useState("");
//   const [placeError, setPlaceError] = useState("");
//   const [startError, setStartError] = useState("");
//   const [startFinishError, setStartFinishError] = useState("");

//   const formIncomplete = () => {
//     let incompleteForm = false;

//     if (!title) {
//       incompleteForm = true;
//       setTitleError("Hace falta colocar un título");
//       alert("Hace falta colocar un título");
//     }

//     if (!place) {
//       incompleteForm = true;
//       setPlaceError("Hace falta especificar un lugar físico o virtual");
//       alert("Hace falta especificar un lugar físico o virtual");
//     }

//     if (!start) {
//       incompleteForm = true;
//       setStartError("Hace falta especificar fecha y hora de evento");
//       alert("Hace falta especificar fecha y hora de evento");
//     }

//     if (finish && finish < start) {
//       incompleteForm = true;
//       setStartFinishError(
//         "La fecha final debe ser DESPUÉS de la fecha de inicio"
//       );
//       alert("La fecha final debe ser DESPUÉS de la fecha de inicio");
//     }

//     return incompleteForm;
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         if (!formIncomplete())
//           formFunction({
//             title,
//             place,
//             start,
//             finish,
//             description,
//             portrait,
//             link,
//           });
//       }}
//       autoComplete="off"
//     >
//       <div className="card">
//         <div className="card-body">
//           <div className="form-group">
//             <label>Nombre del evento: </label>
//             <input
//               type="text"
//               autoComplete="nope"
//               className="form-control"
//               value={title}
//               onChange={(e) => {
//                 setTitle(e.target.value);
//                 setTitleError("");
//               }}
//             />
//           </div>
//           <small className="text-danger">{titleError}</small>

//           <div className="form-group">
//             <label>Lugar: </label>
//             <input
//               type="text"
//               autoComplete="nope"
//               className="form-control"
//               value={place}
//               onChange={(e) => {
//                 setPlace(e.target.value);
//                 setPlaceError("");
//               }}
//             />
//           </div>
//           <small className="text-danger">{placeError}</small>

//           <div className="form-group">
//             <label>Fecha de inicio: </label>
//             <DatePicker
//               selected={start}
//               onChange={(start) => {
//                 setStart(start);
//                 setStartError("");
//                 setStartFinishError("");
//               }}
//               dateFormat="dd MMMM yyyy h:mm aa"
//               showTimeInput
//               calendarClassName="w-100"
//             />
//           </div>
//           <small className="text-danger">{startError}</small>

//           <div className="form-group">
//             <label>Fecha de finalización: </label>
//             <DatePicker
//               selected={finish}
//               onChange={(finish) => {
//                 setFinish(finish);
//                 setStartFinishError("");
//               }}
//               dateFormat="dd MMMM yyyy h:mm aa"
//               showTimeInput
//               calendarClassName="w-100"
//               placeholderText={moment(start)
//                 .add(90, "minutes")
//                 .format("DD MMMM yyyy h:mm A")}
//             />
//           </div>
//           <small className="text-danger">{startFinishError}</small>

//           <div className="form-group">
//             <label>Descripción del evento: </label>
//             <input
//               type="text"
//               autoComplete="nope"
//               className="form-control"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           {event && (
//             <small className="text-warning" style={{ lineHeight: "1em" }}>
//               La imagen previa continúa guardada, pero si se desea editarla se
//               puede hacer aquí.
//             </small>
//           )}
//           <input
//             type="file"
//             className="form-control"
//             onChange={(e) => setPortrait(e.target.files[0])}
//           />

//           <div className="form-group">
//             <label>Enlace externo: </label>
//             <input
//               type="text"
//               autoComplete="nope"
//               className="form-control"
//               value={link}
//               onChange={(e) => setLink(e.target.value)}
//             />
//           </div>

//           <div className="flex-grow-1"></div>

//           <div className="container w-100 text-right">
//             <input
//               type="submit"
//               value="Registrar evento"
//               className="btn btn-primary btn-lg mt-4"
//             />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
