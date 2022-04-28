import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/icons/logo.svg";
import user from "../../images/icons/user.svg";

export const Header = ({ isloggedIn }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" to="/">
          <img src={logo} alt="Логотип учебного проекта" />
        </Link>
        {isloggedIn && (
          <>
            <h2 className="header__title">Фильмы</h2>
            <p className="header__hint">Сохранённые фильмы</p>
          </>
        )}
      </div>

      {isloggedIn ? (
        <button className="header__btn" type="button">
          <span className="header__text">Аккаунт</span>
          <img className="header__img" src={user} alt="" />
        </button>
      ) : (
        <ul className="header__wrap">
          <li className="header__item">
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link header__link_active" to="/sign-in">
              Войти
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};
