import React, { useState } from "react";
import "./MoviesCard.css";

export const MoviesCard = ({ img, alt, title, time }) => {
  const [isSaved, setSaved] = useState(false);
  const handleSaved = () => setSaved(!isSaved);
  return (
    <li
      onClick={handleSaved}
      className={`movies-card__item ${isSaved && "movies-card__item_saved"}`}
    >
      <img className="movies-card__img" src={img} alt={alt} />
      <div className="movies-card__inner">
        <h3 className="movies-card__title">{title}</h3>

        <p className="movies-card__time">{time}</p>
      </div>
      <p className="movies-card__text">Сохранить</p>
    </li>
  );
};
