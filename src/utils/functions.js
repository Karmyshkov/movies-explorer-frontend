const filterCards = (cards, searchTag, isShortFilm) => {
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

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export { filterCards, validateEmail };
