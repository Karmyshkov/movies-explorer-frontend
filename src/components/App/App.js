import React, { useState, useCallback, useEffect } from "react";
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
  const [isFilteredMovie, setFilteredMovie] = useState(false);
  const [searchMovie, setSerchMovie] = useState("");
  const [errorSearchMovie, setErrorSearchMovie] = useState("");
  const [isShowCards, setShowCards] = useState(false);

  const navigate = useNavigate();

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
        navigate("/");
      });
  }, [location.pathname, navigate]);

  useEffect(() => {
    checkToken();
    setCards(JSON.parse(localStorage.getItem("cards")));
    setFilteredMovie(Boolean(localStorage.getItem("statusFilter")));
  }, [checkToken, isLoginIn]);

  //movies

  useEffect(() => {
    moviesApi
      .getMovie(searchMovie)
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, [searchMovie]);

  const handleFilteredMovie = () => setFilteredMovie(!isFilteredMovie);

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
      .filter((movie) => (isFilteredMovie ? movie.duration < 70 : movie.duration >= 70));
    localStorage.setItem("cards", JSON.stringify(findedMovies));
    localStorage.setItem("statusFilter", isFilteredMovie);
    findedMovies.length === 0
      ? setErrorSearchMovie("Ничего не найдено")
      : setErrorSearchMovie("");
    setCards(findedMovies);
    setShowCards(true);
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
                  cards={cards}
                  isFilteredMovie={isFilteredMovie}
                  onFilteredMovie={handleFilteredMovie}
                  searchMovie={searchMovie}
                  onSerchMovie={handleSerchMovie}
                  onSubmitSearcMovie={handleSubmitSearcMovie}
                  errorSearchMovie={errorSearchMovie}
                  isShowCards={isShowCards}
                />
              }
            />
          </Route>
          <Route
            exact
            path="/saved-movies"
            element={<ProtectedRoute isLoginIn={isLoginIn} />}
          >
            <Route isLoginIn={isLoginIn} path="/saved-movies" element={<SavedMovies />} />
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
