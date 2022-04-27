import "./SearchForm.css";
import searchIcon from "../../images/icons/search.svg";

export const SearchForm = () => {
  return (
    <form className="search-form">
      <label className="search-form__label">
        <input className="search-form__input" placeholder="Фильм" />
        <img className="search-form__icon" src={searchIcon} alt="" />
      </label>
      <button className="search-form__btn" type="button" aria-label="Поиск" />
    </form>
  );
};
