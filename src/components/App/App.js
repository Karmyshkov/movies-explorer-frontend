import React, { useState, useCallback, useEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { UserContext } from "../../context/UserContext";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Footer } from "../Footer";
import { Login } from "../Login";
import { Register } from "../Register";
import { Profile } from "../Profile";
import { NotFound } from "../NotFound";
import { SavedMovies } from "../SavedMovies";
import { ProtectedRoute } from "../ProtectedRoute";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

export const App = () => {
  const location = useLocation();
  const isRenderHeader =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile" ||
    location.pathname === "/sign-in" ||
    location.pathname === "/sign-up";

  const isRenderFooter =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";

  const [isLoginIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isShortFilm, setShortFilm] = useState(false);
  const [searchMovie, setSerchMovie] = useState("");
  const [errorSearchMovie, setErrorSearchMovie] = useState("");
  const [isShowCards, setShowCards] = useState(false);

  const navigate = useNavigate();

  const limitCards = useRef();

  limitCards.current =
    window.innerWidth <= 1980 && window.innerWidth > 1240
      ? 3
      : window.innerWidth <= 1240 && window.innerWidth > 692
      ? 2
      : 2;

  const handleLogin = (data) => {
    mainApi
      .login(data)
      .then(() => {
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = (data) => {
    mainApi
      .register(data)
      .then(() => navigate("/sign-in"))
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
      })
      .catch((err) => console.log(err));
  };

  const handleChangeUserInfo = (data) => {
    mainApi
      .changeUserIngo(data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const checkToken = useCallback(() => {
    mainApi
      .getUserData()
      .then(({ data }) => {
        setCurrentUser(data);
        setLoggedIn(true);
        (location.pathname === "/" ||
          location.pathname === "/sign-in" ||
          location.pathname === "/sign-up") &&
          navigate("/movies");
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
        isLoginIn && navigate("/");
      });
  }, [navigate, isLoginIn, location.pathname]);

  useEffect(() => {
    checkToken();
    setCards(JSON.parse(localStorage.getItem("cards")));
    setShortFilm(Boolean(localStorage.getItem("isShortFilm")));
  }, [checkToken, isLoginIn]);

  //movies

  useEffect(() => {
    isLoginIn &&
      cards?.length === 0 &&
      moviesApi
        .getMovie(searchMovie)
        .then((cards) => {
          setCards(cards);
        })
        .catch((err) => console.log(err));
  }, [cards?.length, searchMovie, isLoginIn]);

  const handleShortFilm = () => setShortFilm(!isShortFilm);

  const handleSerchMovie = (word) => setSerchMovie(word);

  const handleSubmitSearcMovie = (nameMovie) => {
    const regexp = new RegExp(nameMovie, "gi");
    const findedMovies = cards
      .filter(
        (movie) =>
          regexp.test(movie.nameRU) ||
          regexp.test(movie.nameEN) ||
          regexp.test(movie.country) ||
          regexp.test(movie.year)
      )
      .filter((movie) => (isShortFilm ? movie.duration < 40 : movie.duration >= 40));
    localStorage.setItem("cards", JSON.stringify(findedMovies));
    localStorage.setItem("isShortFilm", isShortFilm);
    findedMovies.length === 0
      ? setErrorSearchMovie("Ничего не найдено")
      : setErrorSearchMovie("");
    setFilteredCards(findedMovies);
    findedMovies.length > 0 && setShowCards(true);
  };

  const handleSaveMovie = (movie) =>
    mainApi
      .saveMovie(movie)
      .then((movie) => console.log(movie))
      .catch((err) => console.log(err));

  useEffect(() => {
    if (isLoginIn) {
      mainApi
        .getSavedMovies()
        .then((cards) => {
          setSavedCards(cards);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoginIn]);

  return (
    <div className="body">
      <UserContext.Provider value={currentUser}>
        {isRenderHeader && <Header />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/movies" element={<ProtectedRoute isLoginIn={isLoginIn} />}>
            <Route
              path="/movies"
              element={
                <Movies
                  cards={filteredCards}
                  isShortFilm={isShortFilm}
                  onShortFilm={handleShortFilm}
                  searchMovie={searchMovie}
                  onSerchMovie={handleSerchMovie}
                  onSubmitSearcMovie={handleSubmitSearcMovie}
                  errorSearchMovie={errorSearchMovie}
                  isShowCards={isShowCards}
                  limitCards={limitCards.current}
                  onSaveMovie={handleSaveMovie}
                />
              }
            />
          </Route>
          <Route
            exact
            path="/saved-movies"
            element={<ProtectedRoute isLoginIn={isLoginIn} />}
          >
            <Route
              isLoginIn={isLoginIn}
              path="/saved-movies"
              element={
                <SavedMovies
                  cards={savedCards}
                  isShortFilm={isShortFilm}
                  onShortFilm={handleShortFilm}
                  searchMovie={searchMovie}
                  onSerchMovie={handleSerchMovie}
                  onSubmitSearcMovie={handleSubmitSearcMovie}
                  errorSearchMovie={errorSearchMovie}
                  limitCards={limitCards.current}
                />
              }
            />
          </Route>
          <Route exact path="/profile" element={<ProtectedRoute isLoginIn={isLoginIn} />}>
            <Route
              isLoginIn={isLoginIn}
              path="/profile"
              element={
                <Profile
                  onChangeUserInfo={handleChangeUserInfo}
                  onLogout={handleLogout}
                />
              }
            />
          </Route>
          <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
          <Route path="/sign-up" element={<Register onregister={handleRegister} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {isRenderFooter && <Footer />}
      </UserContext.Provider>
    </div>
  );
};
