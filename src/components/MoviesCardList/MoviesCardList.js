import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard";

export const MoviesCardList = ({ cards, errorSearchMovie }) => {
  const location = useLocation();
  const isMoviesPage = location.pathname === "/movies";

  let isSaved = false;

  return (
    <>
      <ul className="movies-card-list">
        {errorSearchMovie && <p className="movies-card-list__text">{errorSearchMovie}</p>}
        {isMoviesPage
          ? cards.map((movie) => (
              <MoviesCard key={movie.id} isSaved={isSaved} movie={movie} />
            ))
          : cards
              .filter((card) => card.isSaved)
              .map((movie) => (
                <MoviesCard key={movie.id} isSaved={isSaved} movie={movie} />
              ))}
      </ul>
      {Boolean(errorSearchMovie) !== true && isMoviesPage && (
        <button className="movies-card-list__btn" type="button">
          Ещё
        </button>
      )}
    </>
  );
};
