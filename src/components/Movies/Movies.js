import React, { memo } from "react";
import "./Movies.css";
import { SearchForm } from "../SearchForm";
import { FilterCheckbox } from "../FilterCheckbox";
import { MoviesCardList } from "../MoviesCardList";

export const Movies = memo(
  ({
    cards,
    isShortFilm,
    onShortFilm,
    searchMovie,
    onSerchMovie,
    onSubmitSearcMovie,
    errorSearchMovie,
    isShowCards,
    limitCards,
  }) => {
    return (
      <div className="movies">
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
          <p className="movies__text">{errorSearchMovie}</p>
        ) : (
          isShowCards && (
            <MoviesCardList
              cards={cards}
              errorSearchMovie={errorSearchMovie}
              limitCards={limitCards}
            />
          )
        )}
      </div>
    );
  }
);
