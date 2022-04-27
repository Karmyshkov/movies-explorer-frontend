import React from "react";
import "./MoviesCard.css";

export const MoviesCard = ({ img, alt, url, title, time }) => {
  return (
    <li className="movies-card__item">
      <a className="movies-card__link" href={url}>
        <img className="movies-card__img" src={img} alt={alt} />
      </a>
      <div className="movies-card__inner">
        <a className="movies-card__link" href={url}>
          <h3 className="movies-card__title">{title}</h3>
        </a>
        <p className="movies-card__time">{time}</p>
      </div>
    </li>
  );
};
