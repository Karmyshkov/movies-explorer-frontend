import React, { memo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/icons/logo.svg";
import user from "../../images/icons/user.svg";
import burger from "../../images/icons/burger.svg";
import close from "../../images/icons/close.svg";
import {
  SIGNUP,
  SIGNIN,
  MAIN_PAGE,
  MOVIES_PAGE,
  SAVED_MOVIES_PAGE,
  ACCOUNT,
  GLAD_TO_SEE,
  WELCOME,
} from "../../utils/constants";

export const Header = memo(({ isLoginIn }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const location = useLocation();

  const isMain = location.pathname === "/";
  const isSignIn = location.pathname === "/sign-in";
  const isSignUp = location.pathname === "/sign-up";
  const logininPages =
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  const setActiveLink = ({ isActive }) =>
    isActive ? "header__menu-link header__menu-link_active" : "header__menu-link";

  const renderElements = () => {
    if (isMain) {
      return isLoginIn ? (
        <Link to="/profile" className="header__btn" type="button">
          <span className="header__text">{ACCOUNT}</span>
          <img className="header__img" src={user} alt="Иконка аккаунт" />
        </Link>
      ) : (
        <ul className="header__wrap">
          <li className="header__item">
            <Link className="header__link" to="/sign-up">
              {SIGNUP}
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link header__link_active" to="/sign-in">
              {SIGNIN}
            </Link>
          </li>
        </ul>
      );
    }
    if (logininPages) {
      return (
        <>
          <nav className={`header__menu ${isOpenMenu ? "header__menu_open" : ""}`}>
            <ul className="header__list">
              <li className="header__row">
                <NavLink
                  onClick={() => {
                    setOpenMenu(false);
                    document.body.style.overflow = "auto";
                  }}
                  to="/"
                  className={setActiveLink}
                >
                  {MAIN_PAGE}
                </NavLink>
              </li>
              <li className="header__row">
                <NavLink
                  onClick={() => setOpenMenu(false)}
                  to="/movies"
                  className={setActiveLink}
                >
                  {MOVIES_PAGE}
                </NavLink>
              </li>
              <li className="header__row">
                <NavLink
                  onClick={() => {
                    setOpenMenu(false);
                    document.body.style.overflow = "auto";
                  }}
                  to="/saved-movies"
                  className={setActiveLink}
                >
                  {SAVED_MOVIES_PAGE}
                </NavLink>
              </li>
              <li className="header__row">
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="/profile"
                  className={`header__btn ${isOpenMenu ? "header__btn_open" : ""}`}
                  type="button"
                >
                  <span className="header__text">{ACCOUNT}</span>
                  <img className="header__img" src={user} alt="Иконка аккаунт" />
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/profile" className="header__btn" type="button">
            <span className="header__text">{ACCOUNT}</span>
            <img className="header__img" src={user} alt="Иконка аккаунт" />
          </Link>
          {isOpenMenu ? (
            <button
              onClick={() => {
                setOpenMenu(false);
                document.body.style.overflow = "auto";
              }}
              className="header__burger"
              type="button"
              aria-label="Закрыть меню"
            >
              <img className="header__close" src={close} alt="Иконка закрыть" />
            </button>
          ) : (
            <button
              onClick={() => {
                setOpenMenu(true);
                document.body.style.overflow = "hidden";
              }}
              className="header__burger"
              type="button"
              aria-label="Закрыть меню"
            >
              <img
                className="header__burger-img"
                src={burger}
                alt="Иконка меню бургера"
              />
            </button>
          )}
        </>
      );
    }
    return <h1 className="header__headline">{isSignIn ? GLAD_TO_SEE : WELCOME}</h1>;
  };

  return (
    <header className={`header ${isSignIn || isSignUp ? "header_auth" : ""}`}>
      <div className="header__inner">
        <Link className="header__logo" to="/">
          <img src={logo} alt="Логотип учебного проекта" />
        </Link>

        {logininPages && (
          <>
            <Link to="/movies" className="header__title">
              {MOVIES_PAGE}
            </Link>
            <Link to="/saved-movies" className="header__hint">
              {SAVED_MOVIES_PAGE}
            </Link>
          </>
        )}
      </div>
      {renderElements()}
    </header>
  );
});
