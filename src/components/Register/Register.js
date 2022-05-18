import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export const Register = memo(({ onregister }) => {
  const [dataForm, setDataForm] = useState({});

  const handleChangeForm = (evt) =>
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });

  return (
    <form
      className="register"
      onSubmit={(evt) => {
        evt.preventDefault();
        onregister(dataForm);
      }}
    >
      <label className="register__label">
        <span className="register__heplper-text">Имя</span>
        <input onChange={handleChangeForm} className="register__input" name="name" />
      </label>
      <p className="register__error">Что-то пошло не так...</p>

      <label className="register__label">
        <span className="register__heplper-text">E-mail</span>
        <input onChange={handleChangeForm} className="register__input" name="email" />
      </label>
      <p className="register__error">Что-то пошло не так...</p>

      <label className="register__label">
        <span className="register__heplper-text">Пароль</span>
        <input onChange={handleChangeForm} className="register__input" name="password" />
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
});
