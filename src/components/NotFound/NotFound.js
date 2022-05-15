import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button onClick={() => navigate(-1)} className="not-found__btn">
        Назад
      </button>
    </div>
  );
};
