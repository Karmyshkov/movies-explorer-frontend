import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/icons/search.svg";

export const SearchForm = () => {
  return (
    <form className="search-form">
      <label className="search-form__label">
        <input className="search-form__input" placeholder="Фильм" required />
        <img className="search-form__icon" src={searchIcon} alt="Иконка поиска" />
      </label>
      <button className="search-form__btn" type="submit" aria-label="Поиск" />
    </form>
  );
};
