import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Footer } from "../Footer";
import { NotFound } from "../NotFound";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="body">
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
