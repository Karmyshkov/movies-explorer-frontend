import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { validateEmail } from "../../utils/functions";
import {
  REQUIRED_FIELD,
  INCORRECT_EMAIL,
  NAME,
  EMAIL,
  PASSOWRD,
  SIGNIN,
  REGISTER,
  ALREADY_REGISTERED,
} from "../../utils/constants";

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
    isValidEmail &&
    Object.values(errors).length === 3 &&
    Object.values(errors).find((error) => error === true) === undefined
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
        <span className="register__heplper-text">{NAME}</span>
        <input
          onChange={handleChangeForm}
          className="register__input"
          name="name"
          type="name"
        />
      </label>
      <p className={`register__error ${errors.name ? "register__error_show" : ""}`}>
        {REQUIRED_FIELD}
      </p>

      <label className="register__label">
        <span className="register__heplper-text">{EMAIL}</span>
        <input
          onChange={handleChangeForm}
          className="register__input"
          name="email"
          type="email"
        />
      </label>
      <p
        className={`register__error ${
          dataForm.email?.length > 0 && !validateEmail(dataForm.email)
            ? "register__error_show"
            : ""
        }`}
      >
        {INCORRECT_EMAIL}
      </p>

      <label className="register__label">
        <span className="register__heplper-text">{PASSOWRD}</span>
        <input
          onChange={handleChangeForm}
          className="register__input"
          name="password"
          type="password"
        />
      </label>
      <p className={`register__error ${errors.password ? "register__error_show" : ""}`}>
        {REQUIRED_FIELD}
      </p>

      <button
        className={`register__btn ${disableBtn && "register__btn_disable"}`}
        type="submit"
      >
        {REGISTER}
      </button>
      <p className="register__text">
        {ALREADY_REGISTERED}
        <Link className="register__link" to="/sign-in">
          {SIGNIN}
        </Link>
      </p>
    </form>
  );
});
