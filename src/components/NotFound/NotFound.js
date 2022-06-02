import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import { NOT_FOUND_ERROR, NOT_FOUND_PAGE, BACK } from "../../utils/constants";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1 className="not-found__title">{NOT_FOUND_ERROR}</h1>
      <p className="not-found__subtitle">{NOT_FOUND_PAGE}</p>
      <button onClick={() => navigate("/")} className="not-found__btn" type="button">
        {BACK}
      </button>
    </div>
  );
};
