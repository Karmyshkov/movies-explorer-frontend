import React from "react";
import "./MoviesCard.css";

export const MoviesCard = ({ img, alt, title, time }) => {
  return (
    <li className="movies-card__item movies-card__item_saved">
      <img className="movies-card__img" src={img} alt={alt} />
      <div className="movies-card__inner">
        <h3 className="movies-card__title">{title}</h3>

        <p className="movies-card__time">{time}</p>
      </div>
      <p className="movies-card__text">Сохранить</p>
    </li>
  );
};
