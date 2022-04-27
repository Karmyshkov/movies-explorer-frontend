import { SearchForm } from "../SearchForm";
import { FilterCheckbox } from "../FilterCheckbox";
import { MoviesCardList } from "../MoviesCardList";

export const Movies = () => {
  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
    </>
  );
};
