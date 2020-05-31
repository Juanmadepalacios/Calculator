import React from "react";

import "./Button.css";

//button values ​​and hood the equal
const Button = ({ value, onClickButton, type }) => {
  return (
    <div className={`Button ${value === "=" ? "equal" : ""} ${type || ""}`} onClick={onClickButton(value)}>
      {value}
    </div>
  );
};

export default Button;
