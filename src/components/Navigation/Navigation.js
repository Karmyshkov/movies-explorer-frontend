import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation__menu">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            Яндекс.Практикум
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            Github
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" target="_blank" className="navigation__link">
            Facebook
          </Link>
        </li>
      </ul>
    </nav>
  );
};
