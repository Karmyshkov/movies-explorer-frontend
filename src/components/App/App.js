import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Footer } from "../Footer";
import { Login } from "../Login";
import { Register } from "../Register";
import { Profile } from "../Profile";
import { NotFound } from "../NotFound";

export const App = () => {
  const [isloggedIn, setLoggedIn] = useState(false);

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

  return (
    <div className="body">
      {isRenderHeader && <Header isloggedIn={isloggedIn} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isRenderFooter && <Footer />}
    </div>
  );
};
