import React from "react";
import "./Portfolio.css";
import arrow from "../../images/icons/arrow-link.svg";
import {
  PORTFOLIO,
  STATIC_WEB_SITE,
  ADAPTIV_WEB_SITE,
  SINGLE_PAGE_APPLICATION,
} from "../../utils/constants";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">{PORTFOLIO}</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://github.com/Karmyshkov/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <h4 className="portfolio__text">{STATIC_WEB_SITE}</h4>
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
            <h4 className="portfolio__text">{ADAPTIV_WEB_SITE}</h4>
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
            <h4 className="portfolio__text">{SINGLE_PAGE_APPLICATION}</h4>
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
