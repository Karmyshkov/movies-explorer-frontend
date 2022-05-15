import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__row">
        <div className="about-me__inner">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
            У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё
            увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал
            в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс
            по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл
            с&nbsp;постоянной работы.
          </p>
          <ul className="about-me__wrap">
            <li className="about-me__item">
              <Link to="/" target="_blank" className="about-me__link">
                Facebook
              </Link>
            </li>
            <li className="about-me__item">
              <Link to="/" target="_blank" className="about-me__link">
                Github
              </Link>
            </li>
          </ul>
        </div>
        <img className="about-me__avatar" src={avatar} alt="Аватар пользователя" />
      </div>
    </div>
  );
};
