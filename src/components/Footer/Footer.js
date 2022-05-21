import React from "react";
import "./Footer.css";
import { Navigation } from "../Navigation";
import { footerHeader, copyright } from "../../utils/constants";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <h3 className="footer__title">{footerHeader}</h3>
        <ul className="footer__inner">
          <li className="footer__column">
            <p className="footer__text footer__text_copirate">{copyright}</p>
          </li>
          <li className="footer__column">
            <Navigation />
          </li>
        </ul>
      </div>
    </footer>
  );
};
