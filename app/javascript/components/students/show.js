import React from "react";
import StudentRegistrations from "./StudentRegistrations";

export default function StudentShow(props) {
  const { student, points, registrations, evidences } = props;
  const { house_id, profile_img_url, f_name, l_name, tec_id, uid } = student;

  let housePictureURL;
  switch (house_id) {
    case "Cuervos":
      housePictureURL = "/casas/cuervos.png";
      break;
    case "Gallinas de Guinea":
      housePictureURL = "/casas/gallinas.png";
      break;
    case "Patos":
      housePictureURL = "/casas/patos.png";
      break;
    case "Pavo Reales":
      housePictureURL = "/casas/pavo_reales.png";
      break;
    case "Venados":
      housePictureURL = "/casas/venados.png";
      break;
  }

  return (
    <main class="container">
      <section>
        <section id="student-display">
          <div className="profile-img-component">
            <a href={"/houses/" + house_id}>
              <img className="user-img" src={profile_img_url}></img>
              <img className="house-icon" src={housePictureURL}></img>
            </a>
          </div>
          <div id="student-info-container">
            <p id="student-name">{`${f_name} ${l_name}`}</p>
            <p id="student-id">{tec_id}</p>
          </div>
        </section>
        <div id="puntos-display">
          <span>Puntos: </span>
          <span id="student-puntos">{points}</span>
        </div>
        <div className="row">
          <section id="my-registrations-panel" className="panel-component">
            <p className="label">Registros de Evidencias:</p>

            <div id="my-registrations-container" className="elements-container">
              <StudentRegistrations
                registrations={registrations}
                evidences={evidences}
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
