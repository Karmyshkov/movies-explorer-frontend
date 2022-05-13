import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import arrow from "../../images/icons/arrow-link.svg";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link to="/" className="portfolio__link">
            <h4 className="portfolio__text">Статичный сайт</h4>
          </Link>
          <Link to="/" className="portfolio__link">
            <img className="portfolio__icon" src={arrow} alt="Иконка стрелки" />
          </Link>
        </li>
        <li className="portfolio__item">
          <Link to="/" className="portfolio__link">
            <h4 className="portfolio__text">Адаптивный сайт</h4>
          </Link>
          <Link to="/" className="portfolio__link">
            <img className="portfolio__icon" src={arrow} alt="Иконка стрелки" />
          </Link>
        </li>
        <li className="portfolio__item">
          <Link to="/" className="portfolio__link">
            <h4 className="portfolio__text">Одностраничное приложение</h4>
          </Link>
          <Link to="/" className="portfolio__link">
            <img className="portfolio__icon" src={arrow} alt="Иконка стрелки" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
