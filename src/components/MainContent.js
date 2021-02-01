import React from "react";
import "./MainContent.css";
import Button from "./Button";
import Chevron from "../assets/chevron-down.svg";
const MainContent = ({
  title,
  desc,
  bgImg,
  leftBtnTxt,
  rightBtnTxt,
  leftBtnLink,
  rightBtnLink,
  isTwoBtns,
  first,
}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="container">
        <div className="desc">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className="btn-container">
          <Button type="primary" text={leftBtnTxt} link={leftBtnLink} />
          {isTwoBtns && (
            <Button type="secondary" text={rightBtnTxt} link={rightBtnLink} />
          )}
        </div>
        {first && (
          <div className="scroll">
            <img src={Chevron} alt="arrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
