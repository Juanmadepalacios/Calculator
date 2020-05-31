import React, { useState } from "react";

import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [target, setTarget] = useState("0");

  const handleButton = (value) => () => {
    const num = parseFloat(value);

    if (value === "AC") {
      setTarget("0");
      return;
    }
    if (value === "±") {
        setTarget(( num * -1).toString());
        return;
      }
    

    setTarget(parseFloat(num + value).toString());
  };
  // building the calculator structure
  return (
    <div className="Calculator">
      <h1>23PEOPLE CALCULATOR</h1>
      <div className="display">{target}</div>
      <div className="buttons">
        <Button onClickButton={handleButton} value="AC" type="function" />
        <Button onClickButton={handleButton} value="±" type="function" />
        <Button onClickButton={handleButton} value="%" type="function" />
        <Button onClickButton={handleButton} value="÷" type="operator" />
        <Button onClickButton={handleButton} value="7" />
        <Button onClickButton={handleButton} value="8" />
        <Button onClickButton={handleButton} value="9" />
        <Button onClickButton={handleButton} value="x" type="operator" />
        <Button onClickButton={handleButton} value="4" />
        <Button onClickButton={handleButton} value="5" />
        <Button onClickButton={handleButton} value="6" />
        <Button onClickButton={handleButton} value="-" type="operator" />
        <Button onClickButton={handleButton} value="1" />
        <Button onClickButton={handleButton} value="2" />
        <Button onClickButton={handleButton} value="3" />
        <Button onClickButton={handleButton} value="+" type="operator" />
        <Button onClickButton={handleButton} value="0" />
        <Button onClickButton={handleButton} value="," />
        <Button onClickButton={handleButton} value="=" type="operator" />
      </div>
      <div className="buttom">-</div>
    </div>
  );
};

export default Calculator;
