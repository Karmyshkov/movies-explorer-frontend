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
      />
      {cards.length !== 0 && <MoviesCardList cards={cards} />}
    </>
  );
};
