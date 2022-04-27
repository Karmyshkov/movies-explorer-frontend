import React from "react";
import "./NavTab.css";

export const NavTab = () => {
  return (
    <ul className="navtab">
      <li className="navtab__item">
        <a className="navtab__link" href="/">
          О проекте
        </a>
      </li>
      <li className="navtab__item">
        <a className="navtab__link" href="/">
          Технологии
        </a>
      </li>
      <li className="navtab__item">
        <a className="navtab__link" href="/">
          Студент
        </a>
      </li>
    </ul>
  );
};
