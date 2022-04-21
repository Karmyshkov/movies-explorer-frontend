import "./Portfolio.css";
import arrow from "../../images/icons/arrow-link.svg";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="/">
            <h4 className="portfolio__text">Статичный сайт</h4>
          </a>
          <a className="portfolio__link" href="/">
            <img className="portfolio__icon" src={arrow} alt="" />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="/">
            <h4 className="portfolio__text">Адаптивный сайт</h4>
          </a>
          <a className="portfolio__link" href="/">
            <img className="portfolio__icon" src={arrow} alt="" />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="/">
            <h4 className="portfolio__text">Одностраничное приложение</h4>
          </a>
          <a className="portfolio__link" href="/">
            <img className="portfolio__icon" src={arrow} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
