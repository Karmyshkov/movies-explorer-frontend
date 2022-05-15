import React, { useState } from "react";
import "./Profile.css";

export const Profile = () => {
  const [isDisable, setDisable] = useState(true);

  const handleDisable = (evt) => {
    evt.preventDefault();
    setDisable(!isDisable);
  };
  return (
    <div className="profile">
      <p className="profile__title">Привет, Виталий!</p>
      <form className="profile__form">
        <div className="profile__row">
          <label className="profile__label" htmlFor="user-name">
            Имя
          </label>
          <input
            onChange={() => console.log("user name")}
            value={"Виталий"}
            className="profile__input"
            id="user-name"
            disabled={isDisable}
          />
        </div>
        <div className="profile__row">
          <label className="profile__label" htmlFor="user-email">
            E-mail
          </label>
          <input
            onChange={() => console.log("user email")}
            value={"pochta@yandex.ru"}
            className="profile__input"
            id="user-email"
            disabled={isDisable}
          />
        </div>
        <button
          onClick={handleDisable}
          className="profile__btn"
          type={`${isDisable ? "button" : "submit"}`}
        >
          {isDisable ? "Редактировать" : "Сохранить"}
        </button>
        <button className="profile__btn profile__btn_color_red" type="submit">
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
};
