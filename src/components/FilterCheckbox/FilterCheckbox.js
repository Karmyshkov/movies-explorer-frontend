import React, { memo } from "react";
import "./FilterCheckbox.css";
import { SHORT_FILMS } from "../../utils/constants";

export const FilterCheckbox = memo(({ isShortFilm, onShortFilm, isNotCards }) => {
  return (
    <div
      className={`filter-checkbox ${isNotCards ? "filter-checkbox_full-container" : ""}`}
    >
      <input
        onChange={onShortFilm}
        className="filter-checkbox__input"
        type="checkbox"
        id="checkbox"
        checked={isShortFilm}
      />
      <label className="filter-checkbox__label" htmlFor="checkbox">
        {SHORT_FILMS}
      </label>
    </div>
  );
});
