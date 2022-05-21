import React from "react";
import { Link } from "react-router-dom";
import "./NavTab.css";
import { aboutProject, technologies, student } from "../../utils/constants";

export const NavTab = () => {
  return (
    <ul className="navtab">
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          {aboutProject}
        </Link>
      </li>
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          {technologies}
        </Link>
      </li>
      <li className="navtab__item">
        <Link to="/" className="navtab__link">
          {student}
        </Link>
      </li>
    </ul>
  );
};
