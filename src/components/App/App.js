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
import {
  SUCCESS_CHANGE_PROFILE,
  ERROR_CHANGE_PROFILE,
  ERROR_SAVE_MOVIE,
  SUCCESS_DELETE_MOVIE,
  ERROR_LOGIN,
} from "../../utils/constants";

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
      .catch((err) => {
        handleOpenTooltip();
        setErrorMessage(ERROR_LOGIN);
        console.log(err);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    mainApi
      .register({ name, email, password })
      .then((data) => {
        if (data) {
          handleLogin({ email, password })
            .then(() => {
              setLoggedIn(true);
              navigate("/movies");
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.removeItem("cards");
        localStorage.removeItem("isShortFilm");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleChangeUserInfo = (data) => {
    mainApi
      .changeUserIngo(data)
      .then(() => {
        handleOpenTooltip();
        setSuccessMessage(SUCCESS_CHANGE_PROFILE);
      })
      .catch((err) => {
        handleOpenTooltip();
        setErrorMessage(ERROR_CHANGE_PROFILE);
        console.log(err);
      });
  };

  const checkToken = useCallback(() => {
    mainApi
      .getUserData()
      .then(({ data }) => {
        setCurrentUser(data);
        setLoggedIn(true);
        (location.pathname === "/sign-in" || location.pathname === "/sign-up") &&
          navigate("/");
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
        isLoginIn && navigate("/");
      });
  }, [navigate, isLoginIn, location.pathname]);

  useEffect(() => {
    checkToken();
    setFilteredCards(JSON.parse(localStorage.getItem("cards")));
    setShortFilm(localStorage.getItem("isShortFilm") === "false" ? false : true);
  }, [checkToken, isLoginIn]);

  useEffect(() => {
    isLoginIn &&
      cards?.length === 0 &&
      moviesApi
        .getMovie()
        .then((cards) => {
          setCards(cards);
        })
        .catch((err) => console.log(err));

    isLoginIn &&
      mainApi
        .getSavedMovies()
        .then((cards) => {
          setSavedCards(cards);
        })
        .catch((err) => console.log(err));
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
    mainApi.saveMovie(movie).catch((err) => {
      handleOpenTooltip();
      setErrorMessage(ERROR_SAVE_MOVIE);
      console.log(err);
    });

  const handleDeleteMovie = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then((deletedCard) => {
        handleOpenTooltip();
        setSuccessMessage(SUCCESS_DELETE_MOVIE);
        setSavedCards(savedCards.filter((card) => deletedCard._id !== card._id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="body">
      <UserContext.Provider value={currentUser}>
        {isRenderHeader && <Header isLoginIn={isLoginIn} />}
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
