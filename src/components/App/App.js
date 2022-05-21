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
import { filterCards } from "../../utils/functions";
import { Tooltip } from "../Tooltip";

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

  const isMoviesPage = location.pathname === "/movies";

  const [isLoginIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filteredSaveCards, setFilteredSaveCards] = useState([]);
  const [isShortFilm, setShortFilm] = useState(false);
  const [searchMovie, setSerchMovie] = useState("");
  const [errorSearchMovie, setErrorSearchMovie] = useState("");
  const [isShowLoader, setShowLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const limitCards = useRef();

  limitCards.current =
    window.innerWidth <= 1980 && window.innerWidth > 1240
      ? 3
      : window.innerWidth <= 1240 && window.innerWidth > 692
      ? 2
      : 2;

  const handleOpenTooltip = () => setOpen(true);

  const handleCloseTooltip = () => setOpen(false);

  const handleLogin = (data) => {
    mainApi
      .login(data)
      .then(() => {
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => setErrorMessage(err));
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
      .catch((err) => setErrorMessage(err));
  };

  const handleChangeUserInfo = (data) => {
    mainApi
      .changeUserIngo(data)
      .then(() => {
        handleOpenTooltip();
        setSuccessMessage("Данные профиля изменены!");
      })
      .catch((err) => {
        handleOpenTooltip();
        setErrorMessage(
          err === "Error: 400" ? "Ошибка при запросе! Введены старые данные." : err
        );
      });
  };

  const checkToken = useCallback(() => {
    setShowLoader(true);
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
        setErrorMessage(err);
        isLoginIn && navigate("/");
      })
      .finally(() => setShowLoader(false));
  }, [navigate, isLoginIn, location.pathname]);

  useEffect(() => {
    checkToken();
    setFilteredCards(JSON.parse(localStorage.getItem("cards")));
    setShortFilm(Boolean(localStorage.getItem("isShortFilm")));
  }, [checkToken, isLoginIn]);

  //movies

  useEffect(() => {
    isLoginIn &&
      cards?.length === 0 &&
      moviesApi
        .getMovie()
        .then((cards) => {
          setCards(cards);
        })
        .catch((err) => setErrorMessage(err));

    isLoginIn &&
      mainApi
        .getSavedMovies()
        .then((cards) => {
          setSavedCards(cards);
        })
        .catch((err) => setErrorMessage(err));
  }, [cards?.length, isLoginIn]);

  const handleShortFilm = () => setShortFilm(!isShortFilm);

  const handleSerchMovie = (word) => setSerchMovie(word);

  const handleSubmitSearcMovie = (nameMovie) => {
    const findedMovies = filterCards(
      isMoviesPage ? cards : savedCards,
      nameMovie,
      isShortFilm
    );
    localStorage.setItem("cards", JSON.stringify(findedMovies));
    localStorage.setItem("isShortFilm", isShortFilm);
    findedMovies.length === 0
      ? setErrorSearchMovie("Ничего не найдено")
      : setErrorSearchMovie("");
    isMoviesPage ? setFilteredCards(findedMovies) : setFilteredSaveCards(findedMovies);
  };

  const handleSaveMovie = (movie) =>
    mainApi
      .saveMovie(movie)
      .then(({ data }) => {
        savedCards.push(data);
      })
      .catch((err) => {
        handleOpenTooltip();
        setErrorMessage(
          err === "Error: 500" ? "Данный фильм уже добавлен в избранное!" : err
        );
      });

  const handleDeleteMovie = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then((deletedCard) => {
        handleOpenTooltip();
        setSuccessMessage("Фильм удален из избранного!");
        setSavedCards(savedCards.filter((card) => deletedCard._id !== card._id));
      })
      .catch((err) => console.log(err));
  };

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
                  limitCards={limitCards.current}
                  onSaveMovie={handleSaveMovie}
                  isShowLoader={isShowLoader}
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
                  cards={filteredSaveCards.length > 0 ? filteredSaveCards : savedCards}
                  isShortFilm={isShortFilm}
                  onShortFilm={handleShortFilm}
                  searchMovie={searchMovie}
                  onSerchMovie={handleSerchMovie}
                  onSubmitSearcMovie={handleSubmitSearcMovie}
                  errorSearchMovie={errorSearchMovie}
                  limitCards={limitCards.current}
                  onDeleteMovie={handleDeleteMovie}
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
        <Tooltip
          isOpen={isOpen}
          onCloseTooltip={handleCloseTooltip}
          successMessage={successMessage}
          errorMessage={errorMessage}
        />
      </UserContext.Provider>
    </div>
  );
};
