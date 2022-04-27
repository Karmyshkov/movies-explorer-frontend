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
    { img: card_01, alt: "", url: "/", title: "33 слова о дизайне", time: "1ч 17м" },
    {
      img: card_02,
      alt: "",
      url: "/",
      title: "Киноальманах «100 лет дизайна»",
      time: "1ч 17м",
    },
    { img: card_03, alt: "", url: "/", title: "В погоне за Бенкси", time: "1ч 17м" },
    {
      img: card_04,
      alt: "",
      url: "/",
      title: "Баския: Взрыв реальности",
      time: "1ч 17м",
    },
    { img: card_05, alt: "", url: "/", title: "Бег это свобода", time: "1ч 17м" },
    { img: card_06, alt: "", url: "/", title: "Книготорговцы", time: "1ч 17м" },
    {
      img: card_07,
      alt: "",
      url: "/",
      title: "Когда я думаю о Германии ночью",
      time: "1ч 17м",
    },
    {
      img: card_08,
      alt: "",
      url: "/",
      title: "Gimme Danger: История Игги и The Stooges",
      time: "1ч 17м",
    },
    {
      img: card_09,
      alt: "",
      url: "/",
      title: "Дженис: Маленькая девочка грустит",
      time: "1ч 17м",
    },
    {
      img: card_10,
      alt: "",
      url: "/",
      title: "Соберись перед прыжком",
      time: "1ч 17м",
    },
    {
      img: card_11,
      alt: "",
      url: "/",
      title: "Пи Джей Харви: A dog called money",
      time: "1ч 17м",
    },
    {
      img: card_12,
      alt: "",
      url: "/",
      title: "По волнам: Искусство звука в кино",
      time: "1ч 17м",
    },
  ];

  return (
    <ul className="movies-card-list">
      {initArr.map((card, index) => (
        <MoviesCard
          key={index}
          img={card.img}
          alt={card.alt}
          url={card.url}
          title={card.title}
          time={card.time}
        />
      ))}
    </ul>
  );
};
