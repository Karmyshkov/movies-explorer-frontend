import React, { memo, useContext, useState } from "react";
import "./Profile.css";
import { UserContext } from "../../context/UserContext";

export const Profile = memo(({ onChangeUserInfo, onLogout }) => {
  const userContext = useContext(UserContext);

  const [dataForm, setDataForm] = useState({
    name: userContext.name,
    email: userContext.email,
  });

  const handleChangeForm = (evt) => setDataForm({ [evt.target.name]: evt.target.value });

  return (
    <div className="profile">
      <p className="profile__title">{`Привет, ${userContext.name}!`}</p>
      <form
        className="profile__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          onChangeUserInfo(dataForm);
        }}
      >
        <div className="profile__row">
          <label className="profile__label" htmlFor="user-name">
            Имя
          </label>
          <input
            onChange={handleChangeForm}
            value={dataForm.name}
            className="profile__input"
            id="user-name"
            name="name"
          />
        </div>
        <div className="profile__row">
          <label className="profile__label" htmlFor="user-email">
            E-mail
          </label>
          <input
            onChange={handleChangeForm}
            value={dataForm.email}
            className="profile__input"
            id="user-email"
            name="email"
          />
        </div>
        <button className="profile__btn" type="submit">
          Редактировать
        </button>
        <button
          onClick={onLogout}
          className="profile__btn profile__btn_color_red"
          type="button"
        >
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
});
