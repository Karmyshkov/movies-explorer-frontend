import React from "react";
import { SearchForm } from "../SearchForm";
import { FilterCheckbox } from "../FilterCheckbox";
import { MoviesCardList } from "../MoviesCardList";

export const SavedMovies = () => {
  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
    </>
  );
};
