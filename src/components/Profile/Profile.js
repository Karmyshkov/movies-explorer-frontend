import React, { memo, useContext, useState, useEffect } from "react";
import "./Profile.css";
import { UserContext } from "../../context/UserContext";
import { validateEmail } from "../../utils/functions";
import { name, email, editProfile, signout } from "../../utils/constants";

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

  console.log(dataForm);

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
          <label className="profile__label" htmlFor="user-name">
            {name}
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
            {email}
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
          {editProfile}
        </button>
        <button
          onClick={onLogout}
          className="profile__btn profile__btn_color_red"
          type="button"
        >
          {signout}
        </button>
      </form>
    </div>
  );
});
