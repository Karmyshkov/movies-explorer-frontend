import React, { memo, useContext, useState, useEffect } from "react";
import "./Profile.css";
import { UserContext } from "../../context/UserContext";
import { validateEmail } from "../../utils/functions";
import { NAME, EMAIL, EDIT_PROFILE, SIGNOUT } from "../../utils/constants";

export const Profile = memo(({ onChangeUserInfo, onLogout }) => {
  const userContext = useContext(UserContext);

  const [dataForm, setDataForm] = useState({
    name: userContext.name,
    email: userContext.email,
  });
  const [isValidEmail, setValidEmail] = useState(false);

  useEffect(
    () => setValidEmail(validateEmail(dataForm.email) === null ? false : true),
    [dataForm.email]
  );

  const handleChangeForm = (evt) =>
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });

  const disableBtn = dataForm.name.length > 0 && isValidEmail;

  return (
    <div className="profile">
      <p className="profile__title">{`Привет, ${userContext.name}!`}</p>
      <form
        className="profile__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          disableBtn && onChangeUserInfo(dataForm);
        }}
      >
        <div className="profile__row">
          <label
            className={`profile__label ${
              dataForm.name.length === 0 ? "profile__label_error" : ""
            }`}
            htmlFor="user-name"
          >
            {NAME}
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
          <label
            className={`profile__label ${
              dataForm.email.length === 0 || !isValidEmail ? "profile__label_error" : ""
            }`}
            htmlFor="user-email"
          >
            {EMAIL}
          </label>
          <input
            onChange={handleChangeForm}
            value={dataForm.email}
            className="profile__input"
            id="user-email"
            name="email"
          />
        </div>
        <button
          className={`profile__btn ${!disableBtn ? "profile__btn_disabled" : ""}`}
          type="submit"
        >
          {EDIT_PROFILE}
        </button>
        <button
          onClick={onLogout}
          className="profile__btn profile__btn_color_red"
          type="button"
        >
          {SIGNOUT}
        </button>
      </form>
    </div>
  );
});
