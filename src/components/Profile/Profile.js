import React, { useContext, useState } from "react";
import "./Profile.css";
import { UserContext } from "../../context/UserContext";

export const Profile = () => {
  const userContext = useContext(UserContext);

  const [isDisable, setDisable] = useState(true);
  const [dataForm, setDataForm] = useState({
    userName: userContext.name,
    userEmail: userContext.email,
  });

  const handleDisable = (evt) => {
    evt.preventDefault();
    setDisable(!isDisable);
  };

  const handleChangeForm = (evt) => setDataForm({ [evt.target.name]: evt.target.value });

  return (
    <div className="profile">
      <p className="profile__title">{`Привет, ${userContext.name}!`}</p>
      <form className="profile__form">
        <div className="profile__row">
          <label className="profile__label" htmlFor="user-name">
            Имя
          </label>
          <input
            onChange={handleChangeForm}
            value={dataForm.userName}
            className="profile__input"
            id="user-name"
            disabled={isDisable}
            name="userName"
          />
        </div>
        <div className="profile__row">
          <label className="profile__label" htmlFor="user-email">
            E-mail
          </label>
          <input
            onChange={handleChangeForm}
            value={dataForm.userEmail}
            className="profile__input"
            id="user-email"
            disabled={isDisable}
            name="userEmail"
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
