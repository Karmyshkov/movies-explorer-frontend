import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard";
import { YET } from "../../utils/constants";

export const MoviesCardList = memo(
  ({ cards, savedCards, errorSearchMovie, limitCards, onSaveMovie, onDeleteMovie }) => {
    const location = useLocation();
    const isMoviesPage = location.pathname === "/movies";

    const [filteredCards, setFilteredCards] = useState([]);
    const [page, setPage] = useState(1);

    // console.log(cards?.map((movie) => movie));

    useEffect(() => {
      setFilteredCards(
        isMoviesPage
          ? cards
              ?.map((movie) => (
                <MoviesCard
                  key={movie.id ? movie.id : movie._id}
                  movie={movie}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                />
              ))
              .filter((movie, index) => index < page * limitCards)
          : cards?.map((movie) => (
              <MoviesCard
                key={movie.id ? movie.id : movie._id}
                movie={movie}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />
            ))
      );
    }, [cards, limitCards, page, onSaveMovie, onDeleteMovie, isMoviesPage]);

    const renderBtn =
      Boolean(errorSearchMovie) !== true &&
      cards?.length !== filteredCards?.length &&
      isMoviesPage;

    return (
      <>
        <ul className="movies-card-list">{filteredCards}</ul>
        {renderBtn && (
          <button
            onClick={() => setPage((prevState) => prevState + 1)}
            className="movies-card-list__btn"
            type="button"
          >
            {YET}
          </button>
        )}
      </>
    );
  }
);
