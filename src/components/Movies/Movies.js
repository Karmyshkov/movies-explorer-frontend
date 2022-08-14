import React, { memo } from "react";
import "./Movies.css";
import { SearchForm } from "../SearchForm";
import { FilterCheckbox } from "../FilterCheckbox";
import { MoviesCardList } from "../MoviesCardList";
import { Preloader } from "../Preloader";

export const Movies = memo(
  ({
    cards,
    savedCards,
    isShortFilm,
    onShortFilm,
    searchMovie,
    onSerchMovie,
    onSubmitSearcMovie,
    errorSearchMovie,
    limitCards,
    onSaveMovie,
    isShowLoader,
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
          <MoviesCardList
            cards={cards}
            savedCards={savedCards}
            errorSearchMovie={errorSearchMovie}
            limitCards={limitCards}
            onSaveMovie={onSaveMovie}
          />
        )}
        {isShowLoader && <Preloader />}
      </div>
    );
  }
);
