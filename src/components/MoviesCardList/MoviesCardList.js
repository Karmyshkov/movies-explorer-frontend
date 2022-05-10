import React from "react";
import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard";
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
  const initArr = [
    {
      img: card_01,
      alt: "",
      title: "33 слова о дизайне",
      time: "1ч 17м",
      isSaved: false,
    },
    {
      img: card_02,
      alt: "",
      title: "Киноальманах «100 лет дизайна»",
      time: "1ч 17м",
      isSaved: true,
    },
    { img: card_03, alt: "", title: "В погоне за Бенкси", time: "1ч 17м" },
    {
      img: card_04,
      alt: "",
      title: "Баския: Взрыв реальности",
      time: "1ч 17м",
      isSaved: false,
    },
    { img: card_05, alt: "", title: "Бег это свобода", time: "1ч 17м", isSaved: false },
    { img: card_06, alt: "", title: "Книготорговцы", time: "1ч 17м", isSaved: true },
    {
      img: card_07,
      alt: "",
      title: "Когда я думаю о Германии ночью",
      time: "1ч 17м",
      isSaved: false,
    },
    {
      img: card_08,
      alt: "",
      title: "Gimme Danger: История Игги и The Stooges",
      time: "1ч 17м",
      isSaved: false,
    },
    {
      img: card_09,
      alt: "",
      title: "Дженис: Маленькая девочка грустит",
      time: "1ч 17м",
      isSaved: false,
    },
    {
      img: card_10,
      alt: "",
      title: "Соберись перед прыжком",
      time: "1ч 17м",
      isSaved: false,
    },
    {
      img: card_11,
      alt: "",
      title: "Пи Джей Харви: A dog called money",
      time: "1ч 17м",
      isSaved: false,
    },
    {
      img: card_12,
      alt: "",
      title: "По волнам: Искусство звука в кино",
      time: "1ч 17м",
      isSaved: false,
    },
  ];

  return (
    <>
      <ul className="movies-card-list">
        {initArr.map((card, index) => (
          <MoviesCard
            key={index}
            img={card.img}
            alt={card.alt}
            title={card.title}
            time={card.time}
            isSaved={card.isSaved}
          />
        ))}
      </ul>
      <button className="movies-card-list__btn" type="button">
        Ещё
      </button>
    </>
  );
};
