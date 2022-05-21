import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export const Register = memo(({ onregister }) => {
  const [dataForm, setDataForm] = useState({});
  const [error, setError] = useState({});

  const handleChangeForm = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
    evt.target.value === ""
      ? setError({ ...error, [evt.target.name]: true })
      : setError({ ...error, [evt.target.name]: false });
  };

  const disableBtn = !(
    Object.keys(error).length === 3 &&
    Object.values(error).find((error) => error === true) !== true
  );

  return (
    <form
      className="register"
      onSubmit={(evt) => {
        evt.preventDefault();
        !disableBtn && onregister(dataForm);
      }}
    >
      <label className="register__label">
        <span className="register__heplper-text">Имя</span>
        <input onChange={handleChangeForm} className="register__input" name="name" />
      </label>
      <p className={`register__error ${error.name ? "register__error_show" : ""}`}>
        Что-то пошло не так...
      </p>

      <label className="register__label">
        <span className="register__heplper-text">E-mail</span>
        <input onChange={handleChangeForm} className="register__input" name="email" />
      </label>
      <p className={`register__error ${error.email ? "register__error_show" : ""}`}>
        Что-то пошло не так...
      </p>

      <label className="register__label">
        <span className="register__heplper-text">Пароль</span>
        <input onChange={handleChangeForm} className="register__input" name="password" />
      </label>
      <p className={`register__error ${error.password ? "register__error_show" : ""}`}>
        Что-то пошло не так...
      </p>

      <button
        className={`register__btn ${disableBtn && "register__btn_disable"}`}
        type="submit"
      >
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
