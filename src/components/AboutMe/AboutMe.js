import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";
import {
  aboutmeTitle,
  aboutmeName,
  aboutmeProfession,
  aboutmeDescription,
  facebook,
  gitHub,
} from "../../utils/constants";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__title">{aboutmeTitle}</h2>
      <div className="about-me__row">
        <div className="about-me__inner">
          <p className="about-me__name">{aboutmeName}</p>
          <p className="about-me__profession">{aboutmeProfession}</p>
          <p className="about-me__description">{aboutmeDescription}</p>
          <ul className="about-me__wrap">
            <li className="about-me__item">
              <Link to="/" target="_blank" className="about-me__link">
                {facebook}
              </Link>
            </li>
            <li className="about-me__item">
              <Link to="/" target="_blank" className="about-me__link">
                {gitHub}
              </Link>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар пользователя" />
      </div>
    </div>
  );
};
