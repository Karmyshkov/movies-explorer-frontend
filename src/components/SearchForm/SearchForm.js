import React, { memo } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/icons/search.svg";

export const SearchForm = memo(({ searchMovie, onSerchMovie, onSubmitSearcMovie }) => {
  return (
    <form
      className="search-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmitSearcMovie(searchMovie);
      }}
    >
      <label className="search-form__label">
        <input
          onChange={(evt) => onSerchMovie(evt.target.value)}
          value={searchMovie || ""}
          className="search-form__input"
          placeholder="Фильм"
          required
        />
        <img className="search-form__icon" src={searchIcon} alt="Иконка поиска" />
      </label>
      <button className="search-form__btn" type="submit" aria-label="Поиск" />
    </form>
  );
});
