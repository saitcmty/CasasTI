import React from "react";

export default function StudentSummary(props) {
  const { student, showPoints } = props;
  const { house_id, profile_img_url, f_name, l_name, tec_id, uid } = student;

  const puntos = uid;
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
    <div className="event-component element-component container p-0">
      <div className="profile-img-component">
        <img className="user-img" src={profile_img_url} />
        <img className="house-icon" src={housePictureURL} />
      </div>

      <div className="student-info">
        <p className="student-name">{`${f_name} ${l_name}`}</p>
        <p className="student-tec-id">{tec_id}</p>
      </div>
      {showPoints && <p className="student-points">Puntos: {puntos}</p>}
      {(
        <div className="student-buttons">
          <a href={`students/${tec_id}`}>
            <i className="material-icons right-icon md-inherit">
              remove_red_eye
            </i>
          </a>
        </div>
      )}
    </div>
  );
}
