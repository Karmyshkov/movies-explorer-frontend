import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { validateEmail } from "../../utils/functions";
import {
  REQUIRED_FIELD,
  INCORRECT_EMAIL,
  EMAIL,
  PASSOWRD,
  SIGNIN,
  NOT_REGISTERED_YET,
  SIGNUP,
} from "../../utils/constants";

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
    isValidEmail &&
    Object.values(errors).length === 2 &&
    Object.values(errors).find((error) => error === true) === undefined
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
        <span className="login__heplper-text">{EMAIL}</span>
        <input
          onChange={handleChangeForm}
          className="login__input"
          name="email"
          type="text"
        />
      </label>
      <p
        className={`login__error ${
          dataForm.email?.length > 0 && !validateEmail(dataForm.email)
            ? "login__error_show"
            : ""
        }`}
      >
        {INCORRECT_EMAIL}
      </p>

      <label className="login__label">
        <span className="login__heplper-text">{PASSOWRD}</span>
        <input
          onChange={handleChangeForm}
          className="login__input"
          name="password"
          type="password"
        />
      </label>
      <p className={`login__error ${errors.password ? "login__error_show" : ""}`}>
        {REQUIRED_FIELD}
      </p>

      <button
        className={`login__btn ${disableBtn && "login__btn_disabled"}`}
        type="submit"
      >
        {SIGNIN}
      </button>
      <p className="login__text">
        {NOT_REGISTERED_YET}
        <Link className="login__link" to="/sign-up">
          {SIGNUP}
        </Link>
      </p>
    </form>
  );
});
