import React from "react";
import axios from "axios";
import moment from "moment";
import StudentSummary from "../students/summary";

export default function ShowEvent(props) {
  const {
    event,
    assistants,
    backendURL,
    portrait,
    currentUser,
    currentAssistance,
  } = props;
  const { title, place, start, finish, description, link } = event;

  const admin = currentUser ? currentUser.admin : false;

  const registerAssistance = async () => {
    try {
      const response = await axios.post(`${backendURL}/assistances`);
      alert(response.data.msg);
      window.location = `${backendURL}/events/${event.id}`;
    } catch (error) {
      console.log(error);
      const { msg } = error.response.data;
      alert(msg);
    }
  };

  const removeAssistance = async () => {
    try {
      const response = await axios.delete(
        `${backendURL}/assistances/${currentAssistance.id}`
      );
      alert(response.data.msg);
      window.location = `${backendURL}/events/${event.id}`;
    } catch (error) {
      console.log(error);
      const { msg } = error.response.data;
      alert(msg);
    }
  };

  return (
    <>
      <img id="event-portrait" src={portrait} style={{ marginTop: "56px" }} />
      <main className="container">
        <h1 className="title mb-4">{title}</h1>

        <div className="row mb-4">
          <section id="event-info" className="col-md-6">
            <div
              id="event-place"
              className="info-container icon-text-component"
            >
              <i className="material-icons md-dark md-inherit">room</i>
              <span>{place}</span>
            </div>

            <div id="dates-container">
              <div id="date-start-info" className="date-time-container">
                <div className="info-container icon-text-component">
                  <i className="material-icons md-dark md-inherit">event</i>
                  <span>{moment(start).locale("es").format("DD MMM")}</span>
                </div>

                <div className="info-container icon-text-component">
                  <i className="material-icons md-dark md-inherit">
                    access_time
                  </i>
                  <span>{moment(start).format("h:mm A")}</span>
                </div>
              </div>

              {finish && (
                <>
                  <i className="material-icons md-dark md-48 middle-icon">
                    trending_flat
                  </i>

                  <div id="date-end-info" className="date-time-container">
                    <div className="info-container icon-text-component">
                      <i className="material-icons md-dark md-inherit">event</i>
                      <span>
                        {moment(finish).locale("es").format("DD MMM")}
                      </span>
                    </div>

                    <div className="info-container icon-text-component">
                      <i className="material-icons md-dark md-inherit">
                        access_time
                      </i>
                      <span>{moment(finish).format("h:mm A")}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {currentAssistance ? (
              <a onClick={removeAssistance}>
                <i
                  className="material-icons md-dark md-inherit"
                  style={{ color: "#30257d" }}
                >
                  event_available
                </i>
                <span>Asistencia registrada</span>
              </a>
            ) : (
              <a onClick={registerAssistance}>
                <i className="material-icons md-dark md-inherit">
                  calendar_today
                </i>
                <span>¿Asistirás a este evento?</span>
              </a>
            )}
          </section>

          {(description || link) && (
            <section id="event-details" className="col-md-6 p-3">
              <p id="event-description">{description}</p>

              {link.length && (
                <a
                  id="event-link-component"
                  className="button-component mt-2"
                  target="_blank"
                  href={link}
                >
                  <span>LINK DEL EVENTO</span>
                  <i className="material-icons md-inherit md-dark">
                    arrow_forward_ios
                  </i>
                </a>
              )}
            </section>
          )}
        </div>

        {admin && (
          <section
            id="assisting-students-panel"
            className="panel-component mt-4"
          >
            <p className="label">ASISTENTES:</p>
            <div id="students-container" className="elements-container">
              {assistants.map((s) => (
                <StudentSummary key={s.tec_id} student={s} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
