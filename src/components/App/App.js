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
  SAVE_MOVIE,
  MAIN_ERROR,
  LIMIT_FOR_LARGE,
  LIMIT_FOR_MEDIUM,
  LIMIT_FOR_SMALL,
  NOT_FOUND_TEXT,
  LOGIN_SUCCESS,
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
  const [isShortSaveFilm, setShortSaveFilm] = useState(false);
  const [searchMovie, setSerchMovie] = useState("");
  const [searchSaveMovie, setSerchSaveMovie] = useState("");
  const [errorSearchMovie, setErrorSearchMovie] = useState("");
  const [errorSearchSaveMovie, setErrorSearchSaveMovie] = useState("");
  const [isShowLoader, setShowLoader] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [isError, setError] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const limitCards = useRef();

  limitCards.current =
    window.innerWidth <= 1980 && window.innerWidth > 1240
      ? LIMIT_FOR_LARGE
      : window.innerWidth <= 1240 && window.innerWidth > 692
      ? LIMIT_FOR_MEDIUM
      : LIMIT_FOR_SMALL;

  const handleOpenTooltip = () => setOpen(true);

  const handleCloseTooltip = () => setOpen(false);

  useEffect(() => {
    isMoviesPage
      ? JSON.parse(localStorage.getItem("cards"))?.length === 0 &&
        setErrorSearchMovie(NOT_FOUND_TEXT)
      : JSON.parse(localStorage.getItem("saveCards"))?.length === 0 &&
        setErrorSearchSaveMovie(NOT_FOUND_TEXT);
  }, [isMoviesPage]);

  useEffect(() => {
    isLoginIn && localStorage.setItem("searchMovie", searchMovie ? searchMovie : "");
  }, [isLoginIn, searchMovie]);

  useEffect(() => {
    isLoginIn &&
      localStorage.setItem("searchSaveMovie", searchSaveMovie ? searchSaveMovie : "");
  }, [isLoginIn, searchSaveMovie]);

  useEffect(() => {
    setSerchMovie(localStorage.getItem("searchMovie"));
    setSerchSaveMovie(localStorage.getItem("searchSaveMovie"));
  }, [location.pathname]);

  useEffect(() => handleCloseTooltip(), [location.pathname]);

  const handleLogin = (data) => {
    mainApi
      .login(data)
      .then(() => {
        setLoggedIn(true);
        navigate("/movies");
        handleOpenTooltip();
        setTooltipMessage(LOGIN_SUCCESS);
        setError(false);
      })
      .catch((err) => {
        handleOpenTooltip();
        setTooltipMessage(ERROR_LOGIN);
        setError(true);
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
        localStorage.removeItem("searchMovie");
        localStorage.removeItem("searchSaveMovie");
        localStorage.removeItem("saveCards");
        localStorage.removeItem("isShortSaveFilm");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleChangeUserInfo = ({ name, email }) => {
    if (currentUser.name !== name || currentUser.email !== email) {
      mainApi
        .changeUserIngo({ name, email })
        .then(({ data }) => {
          setCurrentUser(data);
          setTooltipMessage(SUCCESS_CHANGE_PROFILE);
          setError(false);
          handleOpenTooltip();
        })
        .catch((err) => console.log(err));
    } else {
      setTooltipMessage(ERROR_CHANGE_PROFILE);
      setError(true);
      handleOpenTooltip();
    }
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
    if (isMoviesPage) {
      setFilteredCards(JSON.parse(localStorage.getItem("cards")));
      setShortFilm(localStorage.getItem("isShortFilm") === "false" ? false : true);
    } else {
      setFilteredSaveCards(JSON.parse(localStorage.getItem("saveCards")));
      setShortFilm(localStorage.getItem("isShortSaveFilm") === "false" ? false : true);
    }
  }, [isMoviesPage, checkToken, isLoginIn]);

  useEffect(() => {
    setShowLoader(true);
    if (isLoginIn) {
      cards?.length === 0 &&
        moviesApi
          .getMovie()
          .then((cards) => setCards(cards))
          .catch((err) => console.log(err))
          .finally(() => setShowLoader(false));

      mainApi
        .getSavedMovies()
        .then((cards) => setSavedCards(cards))
        .catch((err) => console.log(err))
        .finally(() => setShowLoader(false));
    }
  }, [cards, isLoginIn]);

  const handleShortFilm = () =>
    isMoviesPage ? setShortFilm(!isShortFilm) : setShortSaveFilm(!isShortSaveFilm);

  const handleSerchMovie = (word) =>
    isMoviesPage ? setSerchMovie(word) : setSerchSaveMovie(word);

  const handleSubmitSearcMovie = (nameMovie) => {
    const findedMovies = filterCards(
      isMoviesPage ? cards : savedCards,
      nameMovie,
      isMoviesPage ? isShortFilm : isShortSaveFilm
    );
    if (isMoviesPage) {
      localStorage.setItem("cards", JSON.stringify(findedMovies));
      localStorage.setItem("isShortFilm", isShortFilm);
    } else {
      localStorage.setItem("saveCards", JSON.stringify(findedMovies));
      localStorage.setItem("isShortSaveFilm", isShortSaveFilm);
    }
    if (findedMovies.length === 0) {
      isMoviesPage
        ? setErrorSearchMovie(NOT_FOUND_TEXT)
        : setErrorSearchSaveMovie(NOT_FOUND_TEXT);
    } else {
      isMoviesPage ? setErrorSearchMovie("") : setErrorSearchSaveMovie("");
    }
    isMoviesPage ? setFilteredCards(findedMovies) : setFilteredSaveCards(findedMovies);
  };

  const handleSaveMovie = (movie) => {
    if (savedCards.find((savedCard) => savedCard.movieId === movie.movieId)) {
      handleOpenTooltip();
      setTooltipMessage(ERROR_SAVE_MOVIE);
      setError(true);
    } else {
      mainApi
        .saveMovie(movie)
        .then(({ data }) => {
          setSavedCards((prevState) => [...prevState, data]);
          setTooltipMessage(SAVE_MOVIE);
          setError(false);
          handleOpenTooltip();
        })
        .catch((err) => {
          console.log(err);
          setTooltipMessage(ERROR_SAVE_MOVIE);
          setError(true);
          handleOpenTooltip();
        });
    }
  };

  const handleDeleteMovie = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then((deletedCard) => {
        handleOpenTooltip();
        setTooltipMessage(SUCCESS_DELETE_MOVIE);
        setError(false);
        setSavedCards(savedCards.filter((card) => deletedCard._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
        setTooltipMessage(MAIN_ERROR);
        setError(true);
      });
  };

  return (
    <div className="body">
      <UserContext.Provider value={currentUser}>
        {isRenderHeader && <Header isLoginIn={isLoginIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<ProtectedRoute isLoginIn={isLoginIn} />}>
            <Route
              path="/movies"
              element={
                <Movies
                  cards={filteredCards}
                  savedCards={savedCards}
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
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  cards={
                    localStorage.getItem("saveCards") ? filteredSaveCards : savedCards
                  }
                  isShortFilm={isShortSaveFilm}
                  onShortFilm={handleShortFilm}
                  searchMovie={searchSaveMovie}
                  onSerchMovie={handleSerchMovie}
                  onSubmitSearcMovie={handleSubmitSearcMovie}
                  errorSearchMovie={errorSearchSaveMovie}
                  limitCards={limitCards.current}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
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
          tooltipMessage={tooltipMessage}
          isError={isError}
        />
      </UserContext.Provider>
    </div>
  );
};
