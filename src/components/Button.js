import React from "react";

import "./Button.css";

//button values ​, hood the equal and capturing click
const Button = ({ value, onClickButton, type }) => {
  return (
    <div
      className={`Button ${value === "=" ? "equal" : ""} ${type || ""}`}
      onClick={onClickButton(value)}
    >
      {value}
    </div>
  );
};

export default Button;
