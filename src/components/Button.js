import React from "react";

import "./Button.css";

//button values ​​and hood the equal
const Button = ({ value, type }) => {
  return <div className={`Button ${value=== '=' ? 'equal' : ''} ${type || ""}`}> {value} </div>;
};

export default Button;
