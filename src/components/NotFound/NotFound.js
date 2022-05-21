import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import { notFoundError, notFoundPage, back } from "../../utils/constants";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1 className="not-found__title">{notFoundError}</h1>
      <p className="not-found__subtitle">{notFoundPage}</p>
      <button onClick={() => navigate(-1)} className="not-found__btn">
        {back}
      </button>
    </div>
  );
};
