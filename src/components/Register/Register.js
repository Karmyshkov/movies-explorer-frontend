import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { api } from "../../utils/MainApi";

export const Register = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleChangeForm = (evt) =>
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

  const handleRegister = (evt) => {
    evt.preventDefault();
    api
      .register(formData)
      .then(() => navigate("/sign-in"))
      .catch((err) => console.log(err));
  };

  return (
    <form className="register">
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

      <button onClick={handleRegister} className="register__btn" type="submit">
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
