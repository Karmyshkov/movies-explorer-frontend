import React from "react";
import "./SavedMovies.css";
import { SearchForm } from "../SearchForm";
import { FilterCheckbox } from "../FilterCheckbox";
import { MoviesCardList } from "../MoviesCardList";

export const SavedMovies = ({
  cards,
  isShortFilm,
  onShortFilm,
  searchMovie,
  onSerchMovie,
  onSubmitSearcMovie,
  errorSearchMovie,
  limitCards,
  onDeleteMovie,
}) => {
  return (
    <div className="saved-movies">
      <SearchForm
        searchMovie={searchMovie}
        onSerchMovie={onSerchMovie}
        onSubmitSearcMovie={onSubmitSearcMovie}
      />
      <FilterCheckbox
        isShortFilm={isShortFilm}
        onShortFilm={onShortFilm}
        isNotCards={Boolean(errorSearchMovie) !== true}
      />
      {errorSearchMovie ? (
        <p className="saved-movies__text">{errorSearchMovie}</p>
      ) : (
        <MoviesCardList
          cards={cards}
          errorSearchMovie={errorSearchMovie}
          limitCards={limitCards}
          onDeleteMovie={onDeleteMovie}
        />
      )}
    </div>
  );
};
