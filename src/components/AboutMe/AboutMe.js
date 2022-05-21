import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";
import {
  ABOUT_ME_TITLE,
  ABOUT_ME_NAME,
  ABOUT_ME_PROFESSION,
  ABOUT_ME_DESCRIPTION,
  FACEBOOK,
  GITHUB,
} from "../../utils/constants";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__title">{ABOUT_ME_TITLE}</h2>
      <div className="about-me__row">
        <div className="about-me__inner">
          <p className="about-me__name">{ABOUT_ME_NAME}</p>
          <p className="about-me__profession">{ABOUT_ME_PROFESSION}</p>
          <p className="about-me__description">{ABOUT_ME_DESCRIPTION}</p>
          <ul className="about-me__wrap">
            <li className="about-me__item">
              <Link to="/" target="_blank" className="about-me__link">
                {FACEBOOK}
              </Link>
            </li>
            <li className="about-me__item">
              <Link to="/" target="_blank" className="about-me__link">
                {GITHUB}
              </Link>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар пользователя" />
      </div>
    </div>
  );
};
