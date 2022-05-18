import React from "react";
import "./FilterCheckbox.css";

export const FilterCheckbox = ({ isFilteredMovie, onFilteredMovie, isNotCards }) => {
  return (
    <div
      className={`filter-checkbox ${isNotCards ? "filter-checkbox_full-container" : ""}`}
    >
      <input
        onChange={onFilteredMovie}
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
