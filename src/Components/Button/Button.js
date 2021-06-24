import React from "react";
import "./Button.css";

const Button = ({ content, type, onButtonClick }) => {
  return (
    <div className={`${content === "0" ? "zero" : ""}`}>
      <div
        className={`button ${content === "0" ? "zeroo" : ""} ${type || ""}`}
        onClick={onButtonClick(content)}
      >
        {content}
      </div>
    </div>
  );
};

export default Button;
