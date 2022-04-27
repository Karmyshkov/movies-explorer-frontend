import React from "react";
import "./Header.css";
import logo from "../../images/icons/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img src={logo} alt="Логотип учебного проекта" />
      </a>
      <ul className="header__wrap">
        <li className="header__item">
          <a className="header__link" href="/sign-up">
            Регистрация
          </a>
        </li>
        <li className="header__item">
          <a className="header__link header__link_active" href="/sign-in">
            Войти
          </a>
        </li>
      </ul>
    </header>
  );
};
