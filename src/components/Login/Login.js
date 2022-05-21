import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { validateEmail } from "../../utils/functions";

export const Login = memo(({ onLogin }) => {
  const [dataForm, setDataForm] = useState({});
  const [isValidEmail, setValidEmail] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(
    () => setValidEmail(validateEmail(dataForm.email) === null ? false : true),
    [dataForm.email]
  );

  const handleChangeForm = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
    evt.target.value === ""
      ? setErrors({ ...errors, [evt.target.name]: true })
      : setErrors({ ...errors, [evt.target.name]: false });
  };

  const disableBtn =
    isValidEmail && Object.values(errors).find((error) => error === true) === undefined
      ? false
      : true;

  return (
    <form
      className="login"
      onSubmit={(evt) => {
        evt.preventDefault();
        !disableBtn && onLogin(dataForm);
      }}
    >
      <label className="login__label">
        <span className="login__heplper-text">E-mail</span>
        <input onChange={handleChangeForm} className="login__input" name="email" />
      </label>
      <p className={`login__error ${errors.email ? "login__error_show" : ""}`}>
        Что-то пошло не так...
      </p>

      <label className="login__label">
        <span className="login__heplper-text">Пароль</span>
        <input onChange={handleChangeForm} className="login__input" name="password" />
      </label>
      <p className={`login__error ${errors.password ? "login__error_show" : ""}`}>
        Что-то пошло не так...
      </p>

      <button
        className={`login__btn ${disableBtn && "login__btn_disable"}`}
        type="submit"
      >
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
