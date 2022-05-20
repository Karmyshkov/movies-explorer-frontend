export const filterCards = (cards, searchTag, isShortFilm) => {
  const regexp = new RegExp(searchTag, "gi");
  return cards
    .filter(
      (movie) =>
        regexp.test(movie.nameRU) ||
        regexp.test(movie.nameEN) ||
        regexp.test(movie.country) ||
        regexp.test(movie.year)
    )
    .filter((movie) => (isShortFilm ? movie.duration < 40 : movie.duration >= 40));
};
