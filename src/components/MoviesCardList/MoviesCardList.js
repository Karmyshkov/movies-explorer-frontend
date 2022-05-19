import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard";

export const MoviesCardList = memo(({ cards, errorSearchMovie, limitCards }) => {
  const location = useLocation();
  const isMoviesPage = location.pathname === "/movies";

  const [filteredCards, setFilteredCards] = useState([]);
  const [page, setPage] = useState(1);

  let isSaved = false;

  useEffect(() => {
    setFilteredCards(
      cards
        .map((movie) => <MoviesCard key={movie.id} isSaved={isSaved} movie={movie} />)
        .filter((movie, index) => index < page * limitCards)
    );
  }, [cards, limitCards, page, isSaved]);

  const renderBtn =
    Boolean(errorSearchMovie) !== true &&
    isMoviesPage &&
    cards.length !== filteredCards.length;

  return (
    <>
      <ul className="movies-card-list">{isMoviesPage ? filteredCards : filteredCards}</ul>
      {renderBtn && (
        <button
          onClick={() => setPage((prevState) => prevState + 1)}
          className="movies-card-list__btn"
          type="button"
        >
          Ещё
        </button>
      )}
    </>
  );
});
