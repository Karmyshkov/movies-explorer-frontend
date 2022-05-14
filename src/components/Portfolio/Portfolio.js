import React from "react";
import "./Portfolio.css";
import arrow from "../../images/icons/arrow-link.svg";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://github.com/Karmyshkov/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h4 className="portfolio__text">Статичный сайт</h4>
          </a>
          <a
            href="https://github.com/Karmyshkov/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="portfolio__icon" src={arrow} alt="Иконка стрелки" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/Karmyshkov/mesto"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h4 className="portfolio__text">Адаптивный сайт</h4>
          </a>
          <a
            href="https://github.com/Karmyshkov/mesto"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="portfolio__icon" src={arrow} alt="Иконка стрелки" />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/Karmyshkov/mesto-react"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h4 className="portfolio__text">Одностраничное приложение</h4>
          </a>
          <a
            href="https://github.com/Karmyshkov/mesto-react"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="portfolio__icon" src={arrow} alt="Иконка стрелки" />
          </a>
        </li>
      </ul>
    </div>
  );
};
