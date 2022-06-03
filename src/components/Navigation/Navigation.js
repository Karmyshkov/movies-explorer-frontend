import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { YANDEX_PRACTICUME, GITHUB, FACEBOOK } from "../../utils/constants";

export const Navigation = () => {
  return (
    <nav className="navigation__menu">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            {YANDEX_PRACTICUME}
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            {GITHUB}
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            {FACEBOOK}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
