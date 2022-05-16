import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
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
import { api } from "../../utils/MainApi";

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

  const navigate = useNavigate();

  const handleLogin = (data) => {
    api
      .login(data)
      .then(() => {
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = (data) => {
    api
      .register(data)
      .then(() => navigate("/sign-in"))
      .catch((err) => console.log(err));
  };

  const checkToken = useCallback(() => {
    api
      .getUserData()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
        navigate("/");
      });
  }, [navigate]);

  useEffect(() => {
    isLoginIn && checkToken();
  }, [checkToken, isLoginIn]);

  return (
    <div className="body">
      {isRenderHeader && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/movies" element={<ProtectedRoute isLoginIn={isLoginIn} />}>
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route
          exact
          path="/saved-movies"
          element={<ProtectedRoute isLoginIn={isLoginIn} />}
        >
          <Route isLoginIn={isLoginIn} path="/saved-movies" element={<SavedMovies />} />
        </Route>
        <Route exact path="/profile" element={<ProtectedRoute isLoginIn={isLoginIn} />}>
          <Route isLoginIn={isLoginIn} path="/profile" element={<Profile />} />
        </Route>
        <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
        <Route path="/sign-up" element={<Register onregister={handleRegister} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isRenderFooter && <Footer />}
    </div>
  );
};
