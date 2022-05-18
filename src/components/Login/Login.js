import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = memo(({ onLogin }) => {
  const [dataForm, setDataForm] = useState({});

  const handleChangeForm = (evt) =>
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });

  return (
    <form
      className="login"
      onSubmit={(evt) => {
        evt.preventDefault();
        onLogin(dataForm);
      }}
    >
      <label className="login__label">
        <span className="login__heplper-text">E-mail</span>
        <input onChange={handleChangeForm} className="login__input" name="email" />
      </label>
      <p className="login__error">Что-то пошло не так...</p>

      <label className="login__label">
        <span className="login__heplper-text">Пароль</span>
        <input onChange={handleChangeForm} className="login__input" name="password" />
      </label>
      <p className="login__error ">Что-то пошло не так...</p>

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
});
