import React from "react";
import "./Promo.css";
import { NavTab } from "../NavTab";
import { PROMO_TITLE } from "../../utils/constants";

export const Promo = () => {
  return (
    <div className="body__promo">
      <div className="promo">
        <h1 className="promo__title">{PROMO_TITLE}</h1>
        <NavTab />
      </div>
    </div>
  );
};
