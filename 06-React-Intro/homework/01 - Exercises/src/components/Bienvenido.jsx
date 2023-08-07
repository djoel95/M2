// import React from "react";

// const studentName = "";
// const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
// const alerts = { m1: "Aprobado", m2: "En curso" };

// export default function Bienvenido() {
//   // el código de tu componente acá
//   return;
// }

// // Esto lo exportamos para los tests
// export { studentName, techSkills, alerts };

import React from "react";
import Botones from './Botones';

const studentName = "Buho1";
const techSkills = ["Html", "Css", "JavaScript", "React", "Node", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  return (
    <div>
      <h1>Buhos Nocturnos</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

export { studentName, techSkills, alerts };
