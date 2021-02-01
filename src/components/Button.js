import React from "react";
import "./Button.css";

const Button = ({ type, text,link }) => {
  return (
    <div className={`btns ${type === `secondary` ? "btn-white" : ""}`}>
      <a className="btn" href={link}>{text}</a>
    </div>
  );
};

export default Button;
