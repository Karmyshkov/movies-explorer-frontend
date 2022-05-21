import React from "react";
import "./Techs.css";
import {
  TEACH_TITLE,
  TEACH_SUBTITLE,
  TEACH_TEXT,
  TEACH_HTML,
  TEACH_CSS,
  TEACH_JS,
  TEACH_REACT,
  TEACH_GIT,
  TEACH_EXPRESS,
  TEACH_MONGO,
} from "../../utils/constants";

export const Techs = () => {
  return (
    <div className="techs">
      <div className="techs__wrap">
        <h2 className="techs__title">{TEACH_TITLE}</h2>
        <div className="techs__inner">
          <h3 className="techs__headline">{TEACH_SUBTITLE}</h3>
          <p className="techs__subtitle">{TEACH_TEXT}</p>
        </div>
        <ul className="techs__grid">
          <li className="techs__item">{TEACH_HTML}</li>
          <li className="techs__item">{TEACH_CSS}</li>
          <li className="techs__item">{TEACH_JS}</li>
          <li className="techs__item">{TEACH_REACT}</li>
          <li className="techs__item">{TEACH_GIT}</li>
          <li className="techs__item">{TEACH_EXPRESS}</li>
          <li className="techs__item">{TEACH_MONGO}</li>
        </ul>
      </div>
    </div>
  );
};
