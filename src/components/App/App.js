import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Footer } from "../Footer";
import { Login } from "../Login";
import { Register } from "../Register";
import { NotFound } from "../NotFound";

export const App = () => {
  const [isloggedIn, setLoggedIn] = useState(true);

  const location = useLocation();
  const isRenderBlocks =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile" ||
    location.pathname === "/sign-in" ||
    location.pathname === "/sign-up";

  const handleLogin = () => setLoggedIn(true);

  return (
    <div className="body">
      {isRenderBlocks && <Header loggedIn={isloggedIn} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isRenderBlocks && <Footer />}
    </div>
  );
};
