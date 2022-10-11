import React, { memo, useState, useEffect } from 'react';
import { Rate } from "antd";
import "./Languages.scss";
const LANGUAGES = [
    {
      label: "Español",
      rate: 5,
    },
    {
      label: "Inglés",
      rate: 4,
    },
  ];

const Languages = memo(() => {
    const [languagesList, setlanguagesList] = useState([]);

    useEffect(() => {
        const getLanguages = () => {
            setlanguagesList(LANGUAGES);
        }
        getLanguages();
    }, []);

    return(
        <ul class="languages">
            <h3>Idiomas</h3>
            {languagesList.map((item) => (
                <li class="idioms">
                    <span>{item.label}</span>
                    <Rate disabled defaultValue={item.rate} />
                </li>
            ))}
        </ul>
    );
});
Languages.displayName = "Languages";
export default Languages;