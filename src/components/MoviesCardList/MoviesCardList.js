import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard";

export const MoviesCardList = memo(
  ({ cards, errorSearchMovie, limitCards, onSaveMovie, onDeleteMovie }) => {
    const location = useLocation();
    const isMoviesPage = location.pathname === "/movies";

    const [filteredCards, setFilteredCards] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
      setFilteredCards(
        cards
          ?.map((movie) => (
            <MoviesCard
              key={movie.id ? movie.id : movie._id}
              movie={movie}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
            />
          ))
          .filter((movie, index) => index < page * limitCards)
      );
    }, [cards, limitCards, page, onSaveMovie, onDeleteMovie]);

    const renderBtn =
      Boolean(errorSearchMovie) !== true && cards.length !== filteredCards.length;

    return (
      <>
        <ul className="movies-card-list">
          {isMoviesPage ? filteredCards : filteredCards}
        </ul>
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
  }
);
