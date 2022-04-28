import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  return (
    <form className="login">
      <label className="login__label">
        <span className="login__heplper-text">Имя</span>
        <input className="login__input" />
      </label>
      <p className="login__error">Что-то пошло не так...</p>

      <label className="login__label">
        <span className="login__heplper-text">E-mail</span>
        <input className="login__input" />
      </label>
      <p className="login__error">Что-то пошло не так...</p>

      <label className="login__label">
        <span className="login__heplper-text">Пароль</span>
        <input className="login__input" />
      </label>
      <p className="login__error login__error_show">Что-то пошло не так...</p>

      <button className="login__btn" type="submit">
        Войти
      </button>
      <p className="login__text">
        Ещё не зарегистрированы?
        <Link className="login__link" to="/sign-up">
          Регистрация
        </Link>
      </p>
    </form>
  );
};
