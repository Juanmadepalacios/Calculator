import React, { useState } from "react";

import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const[target, setTarget] = useState("123");
  // building the calculator structure
  return (
    <div className="Calculator">
      <h1>23PEOPLE CALCULATOR</h1>
      <div className="display">{target}</div>
      <div className="buttons">
        <Button value="AC"type="function"/>
        <Button value="±" type="function"/>
        <Button value="%" type="function"/>
        <Button value="/" type="operator"/>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="x" type="operator"/>
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" type="operator"/>
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" type="operator"/>
        <Button value="0" />
        <Button value="," />
        <Button value="=" type="operator"/>
      </div>
      <div className="buttom">-</div>
    </div>
  );
};

export default Calculator;
