import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/icons/logo.svg";
import user from "../../images/icons/user.svg";
import burger from "../../images/icons/burger.svg";

export const Header = () => {
  const location = useLocation();

  const isMain = location.pathname === "/";
  const isSignIn = location.pathname === "/sign-in";
  const isSignUp = location.pathname === "/sign-up";
  const isloggedIn =
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  const renderElements = () => {
    if (isMain) {
      return (
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
      );
    }
    if (isloggedIn) {
      return (
        <>
          <Link to="/profile" className="header__btn" type="button">
            <span className="header__text">Аккаунт</span>
            <img className="header__img" src={user} alt="" />
          </Link>
          <button className="header__burger" type="button">
            <img className="header__burger-img" src={burger} alt="" />
          </button>
        </>
      );
    }
    return (
      <h1 className="header__headline">
        {isSignIn ? "Рады видеть!" : "Добро пожаловать!"}
      </h1>
    );
  };

  return (
    <header className={`header ${isSignIn || isSignUp ? "header_auth" : ""}`}>
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
      {renderElements()}
    </header>
  );
};
