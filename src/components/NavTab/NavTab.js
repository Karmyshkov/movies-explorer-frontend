import React from "react";
import { Link } from "react-router-dom";
import "./NavTab.css";

export const NavTab = () => {
  return (
    <ul className="navtab">
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          О проекте
        </Link>
      </li>
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          Технологии
        </Link>
      </li>
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          Студент
        </Link>
      </li>
    </ul>
  );
};
