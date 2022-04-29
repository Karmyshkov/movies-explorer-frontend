import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <ul className="footer__inner">
          <li className="footer__column">
            <p className="footer__text footer__text_copirate">2020</p>
          </li>
          <li className="footer__column">
            <nav className="footer__menu">
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    Яндекс.Практикум
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    Github
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    Facebook
                  </a>
                </li>
              </ul>
            </nav>
          </li>
        </ul>
      </div>
    </footer>
  );
};
