import React, { memo } from "react";
import { SearchForm } from "../SearchForm";
import { FilterCheckbox } from "../FilterCheckbox";
import { MoviesCardList } from "../MoviesCardList";

export const Movies = memo(
  ({
    cards,
    isFilteredMovie,
    onFilteredMovie,
    searchMovie,
    onSerchMovie,
    onSubmitSearcMovie,
    errorSearchMovie,
    isShowCards,
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
          isNotCards={Boolean(errorSearchMovie) !== true}
        />
        {isShowCards && (
          <MoviesCardList cards={cards} errorSearchMovie={errorSearchMovie} />
        )}
      </>
    );
  }
);
