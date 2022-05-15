import React from "react";
import "./Promo.css";
import { NavTab } from "../NavTab";

export const Promo = () => {
  return (
    <div className="body__promo">
      <div className="promo">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavTab />
      </div>
    </div>
  );
};
