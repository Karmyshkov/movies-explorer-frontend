import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import closeIcon from "../../images/icons/close.svg";
import { BEATFILM_URL, SAVE } from "../../utils/constants";

export const MoviesCard = memo(({ movie, onSaveMovie, onDeleteMovie }) => {
  const location = useLocation();
  const isMovies = location.pathname === "/movies";

  const handleSaveMovie = () => {
    onSaveMovie({
      country: movie.country ? movie.country : "",
      director: movie.director ? movie.director : "",
      duration: movie.duration ? movie.duration : "",
      year: movie.year ? movie.year : "",
      description: movie.description ? movie.description : "",
      image: `${BEATFILM_URL}${movie.image?.url ? movie.image.url : ""}`,
      trailerLink: movie.trailerLink ? movie.trailerLink : "",
      thumbnail: `${BEATFILM_URL}${
        movie.image.formats.thumbnail ? movie.image.formats.thumbnail.url : ""
      }`,
      movieId: movie.id,
      nameRU: movie.nameRU ? movie.nameRU : "",
      nameEN: movie.nameEN ? movie.nameEN : movie.nameEN,
    });
  };

  return (
    <li
      className={`movies-card__item ${
        isMovies === true && !isMovies ? "movies-card__item_saved" : ""
      }`}
    >
      <img
        className="movies-card__img"
        src={isMovies ? `${BEATFILM_URL}${movie.image.url}` : movie.image}
        alt={`Обложка фильма ${movie.nameRU}`}
      />
      <div className="movies-card__inner">
        <a
          href={movie.trailerLink ? movie.trailerLink : "/"}
          className="movies-card__link"
          target="_blank"
          rel="noreferrer noopener"
        >
          {movie.nameRU}
        </a>

        <p className="movies-card__time">{movie.duration}</p>
      </div>
      {isMovies ? (
        <button onClick={handleSaveMovie} className="movies-card__btn-save" type="button">
          {SAVE}
        </button>
      ) : (
        <button
          onClick={() => onDeleteMovie(movie._id)}
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
