import React from "react";
import "./FilterCheckbox.css";

export const FilterCheckbox = () => {
  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" id="checkbox" />
      <label className="filter-checkbox__label" htmlFor="checkbox">
        Короткометражки
      </label>
    </div>
  );
};
