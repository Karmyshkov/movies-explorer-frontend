import React from "react";
import "./Tooltip.css";

export const Tooltip = ({ isOpen, onCloseTooltip, tooltipMessage, isError }) => {
  return (
    <div
      onClick={onCloseTooltip}
      className={`tooltip ${isOpen ? "tooltip_opened" : ""} ${
        isError ? "tooltip_error" : "tooltip_success"
      } `}
    >
      <h2 className="tooltip__title">{tooltipMessage}</h2>
    </div>
  );
};
