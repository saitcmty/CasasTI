import React from "react";
import StudentElement from "./summary";

export default function StudentsList(props) {
  const { label, students, showPoints } = props;

  return (
    <section id="all-students-panel" className="panel-component">
      <p className="label">{label}</p>
      <div id="students-container" className="elements-container">
        {students.map((student) => (
          <StudentElement
            key={student.tec_id}
            student={student}
            showPoints={showPoints}
          />
        ))}
      </div>
    </section>
  );
}
