import React from "react";
import { Link } from "react-router-dom";
import "./NavTab.css";
import { ABOUT_PROJECT, TECHNOLOGIES, STUDENT } from "../../utils/constants";

export const NavTab = () => {
  return (
    <ul className="navtab">
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          {ABOUT_PROJECT}
        </Link>
      </li>
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          {TECHNOLOGIES}
        </Link>
      </li>
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          {STUDENT}
        </Link>
      </li>
    </ul>
  );
};
