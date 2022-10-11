import React, { memo, useState, useEffect } from "react";
import "./Personal.scss";
const PERSONAL = [
  {
    label: "kellyfigueroa064@gmail.com",
  },
  {
    label: "(+58) 4142984340",
  },
  {
    label: "Caracas, Venezuela",
  },
  {
    label: "3 de marzo de 1997",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kelly-alexandra-figueroa-curiel-402308182/",
  },
  {
    label: "GitHub",
    link: "https://github.com/kellyfigueroa064",
  },
];

const Personal = memo(() => {
  const [personalList, setpersonalList] = useState([]);

  useEffect(() => {
    const getPersonal = () => {
      setpersonalList(PERSONAL);
    };
    getPersonal();
  }, []);

  return (
    <ul class="personal">
      <h3>Datos personales</h3>
      {personalList.map((item) => (
        <li class="links">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer">
              {" "}
              {item.label}{" "}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
});
Personal.displayName = "Personal";
export default Personal;
