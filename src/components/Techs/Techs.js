import React from "react";
import "./Techs.css";
import {
  teachTitle,
  teachSubtitle,
  teachText,
  teachHTML,
  teachCSS,
  teachJS,
  teachReact,
  teachGit,
  teachExpress,
  teachMongoDB,
} from "../../utils/constants";

export const Techs = () => {
  return (
    <div className="techs">
      <div className="techs__wrap">
        <h2 className="techs__title">{teachTitle}</h2>
        <div className="techs__inner">
          <h3 className="techs__headline">{teachSubtitle}</h3>
          <p className="techs__subtitle">{teachText}</p>
        </div>
        <ul className="techs__grid">
          <li className="techs__item">{teachHTML}</li>
          <li className="techs__item">{teachCSS}</li>
          <li className="techs__item">{teachJS}</li>
          <li className="techs__item">{teachReact}</li>
          <li className="techs__item">{teachGit}</li>
          <li className="techs__item">{teachExpress}</li>
          <li className="techs__item">{teachMongoDB}</li>
        </ul>
      </div>
    </div>
  );
};
