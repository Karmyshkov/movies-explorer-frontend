import React from "react";
import "./NavTab.css";
import { ABOUT_PROJECT, TECHNOLOGIES, STUDENT } from "../../utils/constants";

export const NavTab = () => {
  return (
    <ul className="navtab">
      <li className="navtab__item">
        <a href="#aboutProject" className="navtab__link">
          {ABOUT_PROJECT}
        </a>
      </li>
      <li className="navtab__item">
        <a href="#teach" className="navtab__link">
          {TECHNOLOGIES}
        </a>
      </li>
      <li className="navtab__item">
        <a href="#aboutMe" className="navtab__link">
          {STUDENT}
        </a>
      </li>
    </ul>
  );
};
