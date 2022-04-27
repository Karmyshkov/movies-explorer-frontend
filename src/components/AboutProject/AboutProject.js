import React from "react";
import "./AboutProject.css";

export const AboutProject = () => {
  return (
    <div className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__grid">
        <li className="about-project__column">
          <h3 className="about-project__headling">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
            финальные доработки.
          </p>
        </li>
        <li className="about-project__column">
          <h3 className="about-project__headling">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="about-project__progress">
        <li className="about-project__week about-project__week_backend">1 неделя</li>
        <li className="about-project__week">4 недели</li>
        <p className="about-project__hint">Back-end</p>
        <p className="about-project__hint">Front-end</p>
      </ul>
    </div>
  );
};
