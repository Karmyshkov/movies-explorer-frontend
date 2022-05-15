import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  return (
    <form className="register">
      <label className="register__label">
        <span className="register__heplper-text">Имя</span>
        <input className="register__input" />
      </label>
      <p className="register__error">Что-то пошло не так...</p>

      <label className="register__label">
        <span className="register__heplper-text">E-mail</span>
        <input className="register__input" />
      </label>
      <p className="register__error">Что-то пошло не так...</p>

      <label className="register__label">
        <span className="register__heplper-text">Пароль</span>
        <input className="register__input" />
      </label>
      <p className="register__error register__error_show">Что-то пошло не так...</p>

      <button className="register__btn" type="submit">
        Зарегистрироваться
      </button>
      <p className="register__text">
        Уже зарегистрированы?
        <Link className="register__link" to="/sign-in">
          Войти
        </Link>
      </p>
    </form>
  );
};
