import React from "react";
import "./Tooltip.css";

export const Tooltip = ({ isOpen, onCloseTooltip, successMessage, errorMessage }) => {
  return (
    <div
      onClick={onCloseTooltip}
      className={`tooltip ${isOpen ? "tooltip_opened" : ""} ${
        successMessage ? "tooltip_success" : "tooltip_error"
      } `}
    >
      <h2 className="tooltip__title">{successMessage ? successMessage : errorMessage}</h2>
    </div>
  );
};
