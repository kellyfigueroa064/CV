import React, { memo, useState, useEffect } from "react";
import { Rate } from "antd";
import "./Competencies.scss";
const COMPETENCIES = [
  {
    label: "Javascript",
    rate: 3,
  },
  {
    label: "PHP",
    rate: 3,
  },
  {
    label: "Laravel",
    rate: 4,
  },
  {
    label: "Bootstrap",
    rate: 4,
  },
  {
    label: "Bases de Datos",
    rate: 3,
  },
  {
    label: "MySQL",
    rate: 4,
  },
  {
    label: "PostgreSQL",
    rate: 4,
  },
];

const Competencies = memo(() => {
  const [competenciesList, setcompetenciesList] = useState([]);

  useEffect(() => {
    const getCompetencies = () => {
      setcompetenciesList(COMPETENCIES);
    };
    getCompetencies();
  }, []);

  return (
    <ul class="competencies">
      <h3>Competencias</h3>
      {competenciesList.map((item) => (
        <li className="habilities">
          <span>{item.label}</span>
          <Rate disabled defaultValue={item.rate} />
        </li>
      ))}
    </ul>
  );
});
Competencies.displayName = "Competencies";
export default Competencies;
