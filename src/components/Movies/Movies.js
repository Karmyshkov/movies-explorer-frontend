import React from "react";
import { SearchForm } from "../SearchForm";
import { FilterCheckbox } from "../FilterCheckbox";
import { MoviesCardList } from "../MoviesCardList";

export const Movies = ({
  cards,
  isFilteredMovie,
  onFilteredMovie,
  searchMovie,
  onSerchMovie,
  onSubmitSearcMovie,
  errorSearchMovie,
}) => {
  return (
    <>
      <SearchForm
        searchMovie={searchMovie}
        onSerchMovie={onSerchMovie}
        onSubmitSearcMovie={onSubmitSearcMovie}
      />
      <FilterCheckbox
        isFilteredMovie={isFilteredMovie}
        onFilteredMovie={onFilteredMovie}
        isNotCards={cards.length === 0 && Boolean(errorSearchMovie) !== true}
      />
      {Boolean(errorSearchMovie) === true ? (
        <MoviesCardList cards={cards} errorSearchMovie={errorSearchMovie} />
      ) : (
        cards.length !== 0 && (
          <MoviesCardList cards={cards} errorSearchMovie={errorSearchMovie} />
        )
      )}
    </>
  );
};
