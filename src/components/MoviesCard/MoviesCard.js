import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import closeIcon from "../../images/icons/close.svg";
import { BEATFILM_URL } from "../../utils/constants";

export const MoviesCard = memo(({ movie, isSaved }) => {
  const location = useLocation();
  const isMovies = location.pathname === "/movies";
  return (
    <li
      className={`movies-card__item ${
        isMovies === true && isSaved ? "movies-card__item_saved" : ""
      }`}
    >
      <img
        className="movies-card__img"
        src={`${BEATFILM_URL}${movie.image.url}`}
        alt={`Обложка фильма ${movie.nameRU}`}
      />
      <div className="movies-card__inner">
        <h3 className="movies-card__title">{movie.nameRU}</h3>

        <p className="movies-card__time">{movie.duration}</p>
      </div>
      {isMovies ? (
        <p className="movies-card__text">Сохранить</p>
      ) : (
        <button
          className="movies-card__btn"
          type="button"
          aria-label="Удалить из избранного"
        >
          <img src={closeIcon} alt="Иконка крестика" />
        </button>
      )}
    </li>
  );
});
