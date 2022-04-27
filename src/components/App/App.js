import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "../Header";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { Footer } from "../Footer";
import { FindNotFound } from "../FindNotFound";

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<FindNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
