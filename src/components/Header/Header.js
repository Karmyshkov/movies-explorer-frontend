import React from "react";
import "./Header.css";
import logo from "../../images/icons/logo.svg";
import user from "../../images/icons/user.svg";

export const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="/">
          <img src={logo} alt="Логотип учебного проекта" />
        </a>
        {loggedIn && (
          <>
            <h2 className="header__title">Фильмы</h2>
            <p className="header__hint">Сохранённые фильмы</p>
          </>
        )}
      </div>

      {loggedIn ? (
        <button className="header__btn" type="button">
          <span className="header__text">Аккаунт</span>
          <img className="header__img" src={user} alt="" />
        </button>
      ) : (
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
      )}
    </header>
  );
};
