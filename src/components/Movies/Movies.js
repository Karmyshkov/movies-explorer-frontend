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
}) => {
  return (
    <>
      <SearchForm searchMovie={searchMovie} onSerchMovie={onSerchMovie} />
      <FilterCheckbox
        isFilteredMovie={isFilteredMovie}
        onFilteredMovie={onFilteredMovie}
      />
      {searchMovie.length !== 0 && <MoviesCardList cards={cards} />}
    </>
  );
};
