import React from "react";
import "./FilterCheckbox.css";

export const FilterCheckbox = ({ isFilteredMovie, onFilteredMovie }) => {
  return (
    <div className="filter-checkbox">
      <input
        onClick={onFilteredMovie}
        className="filter-checkbox__input"
        type="checkbox"
        id="checkbox"
        checked={isFilteredMovie}
      />
      <label className="filter-checkbox__label" htmlFor="checkbox">
        Короткометражки
      </label>
    </div>
  );
};
