import React from "react";
import "./MoviesCardList.css";
import card_01 from "../../images/cards/01_card.jpg";
import card_02 from "../../images/cards/02_card.jpg";
import card_03 from "../../images/cards/03_card.jpg";
import card_04 from "../../images/cards/04_card.jpg";
import card_05 from "../../images/cards/05_card.jpg";
import card_06 from "../../images/cards/06_card.jpg";
import card_07 from "../../images/cards/07_card.jpg";
import card_08 from "../../images/cards/08_card.jpg";
import card_09 from "../../images/cards/09_card.jpg";
import card_10 from "../../images/cards/10_card.jpg";
import card_11 from "../../images/cards/11_card.jpg";
import card_12 from "../../images/cards/12_card.jpg";

export const MoviesCardList = () => {
  return (
    <ul className="movies-card-list">
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_01} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">33 слова о дизайне</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_02} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">Киноальманах «100 лет дизайна»</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_03} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">В погоне за Бенкси</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>

      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_04} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">Баския: Взрыв реальности</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_05} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">Бег это свобода</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_06} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">Книготорговцы</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>

      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_07} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">Когда я думаю о Германии ночью</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_08} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">
              Gimme Danger: История Игги и The Stooges
            </h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_09} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">Дженис: Маленькая девочка грустит</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>

      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_10} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">Соберись перед прыжком</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_11} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">Пи Джей Харви: A dog called money</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
      <li className="movies-card-list__item">
        <a className="movies-card-list__link" href="/">
          <img className="movies-card-list__img" src={card_12} alt="" />
        </a>
        <div className="movies-card-list__inner">
          <a className="movies-card-list__link" href="/">
            <h3 className="movies-card-list__title">По волнам: Искусство звука в кино</h3>
          </a>
          <p className="movies-card-list__time">1ч 17м</p>
        </div>
      </li>
    </ul>
  );
};
