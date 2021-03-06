import React from "react";
import "./Techs.css";

export const Techs = () => {
  return (
    <div className="techs">
      <div className="techs__wrap">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__inner">
          <h3 className="techs__headline">7 технологий</h3>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном
            проекте.
          </p>
        </div>
        <ul className="techs__grid">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </div>
  );
};
