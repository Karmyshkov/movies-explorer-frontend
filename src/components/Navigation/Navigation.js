import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { yandexPracticume, gitHub, facebook } from "../../utils/constants";

export const Navigation = () => {
  return (
    <nav className="navigation__menu">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            {yandexPracticume}
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            {gitHub}
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            {facebook}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
