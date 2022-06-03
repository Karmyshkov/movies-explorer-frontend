import React from "react";
import "./Footer.css";
import { Navigation } from "../Navigation";
import { FOOTER_HEADER, COPYRIGHT } from "../../utils/constants";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <h3 className="footer__title">{FOOTER_HEADER}</h3>
        <ul className="footer__inner">
          <li className="footer__column">
            <p className="footer__text footer__text_copirate">{COPYRIGHT}</p>
          </li>
          <li className="footer__column">
            <Navigation />
          </li>
        </ul>
      </div>
    </footer>
  );
};
