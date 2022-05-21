import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { validateEmail } from "../../utils/functions";

export const Register = memo(({ onregister }) => {
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
      <p className={`register__error ${errors.name ? "register__error_show" : ""}`}>
        Что-то пошло не так...
      </p>

      <label className="register__label">
        <span className="register__heplper-text">E-mail</span>
        <input onChange={handleChangeForm} className="register__input" name="email" />
      </label>
      <p className={`register__error ${errors.email ? "register__error_show" : ""}`}>
        Что-то пошло не так...
      </p>

      <label className="register__label">
        <span className="register__heplper-text">Пароль</span>
        <input onChange={handleChangeForm} className="register__input" name="password" />
      </label>
      <p className={`register__error ${errors.password ? "register__error_show" : ""}`}>
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
