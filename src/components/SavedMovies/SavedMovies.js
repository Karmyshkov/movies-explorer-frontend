import React from "react";
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
}) => {
  return (
    <>
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
      <MoviesCardList
        cards={cards}
        errorSearchMovie={errorSearchMovie}
        limitCards={limitCards}
      />
    </>
  );
};
