import React, { useState } from "react";

import logo from './logo.png'
import Button from "./Button";
import "./Calculator.css";

//useState target button
const Calculator = () => {
  const [target, setTarget] = useState("0");
  //useState save button
  const [save, setSave] = useState(null);
  //useState operator button
  const [operator, setOperator] = useState(null);

  const handleButton = (value) => () => {
    const num = parseFloat(target);
    //AC functionality
    if (value === "AC") {
      setTarget("0");
      setSave(null);
      setOperator(null);
      return;
    }
    //± functionality
    if (value === "±") {
      setTarget((num * -1).toString());
      return;
    }
    //% functionality
    if (value === "%") {
      setTarget((num / 100).toString());
      setSave(null);
      setOperator(null);
      return;
    }

    if (value === "."){
      if (value.includes('.')) return;
      setTarget(target + '.');
      return;
    }
    //+ functionality
    if (value === "+") {
      if (operator != null) {
      if (operator === "+") {
        setSave(save + parseFloat(target));
      } else if (operator === "-") {
        setSave(save - parseFloat(target));
      } else if (operator === "÷") {
        setSave(save / parseFloat(target));
      } else if (operator === "x") {
        setSave(save * parseFloat(target));
      }
    } else {
      setSave(parseFloat(target));
    }

      
      setTarget("0");
      setOperator("+");
      return;
    }
    //- functionality
    if (value === "-") {
      if (operator != null) {
      if (operator === "+") {
        setSave(save + parseFloat(target));
      } else if (operator === "-") {
        setSave(save - parseFloat(target));
      } else if (operator === "÷") {
        setSave(save / parseFloat(target));
      } else if (operator === "x") {
        setSave(save * parseFloat(target));
      }
    } else {
      setSave(parseFloat(target));
    }
      setTarget("0");
      setOperator("-");
      return;
    }
    //÷ functionality
    if (value === "÷") {
      if (operator != null) {
      if (operator === "+") {
        setSave(save + parseFloat(target));
      } else if (operator === "-") {
        setSave(save - parseFloat(target));
      } else if (operator === "÷") {
        setSave(save / parseFloat(target));
      } else if (operator === "x") {
        setSave(save * parseFloat(target));
      }
    } else {
      setSave(parseFloat(target));
    }
      setTarget("0");
      setOperator("÷");
      return;
    }
    //x functionality
    if (value === "x") {
      if (operator != null) {
      if (operator === "+") {
        setSave(save + parseFloat(target));
      } else if (operator === "-") {
        setSave(save - parseFloat(target));
      } else if (operator === "÷") {
        setSave(save / parseFloat(target));
      } else if (operator === "x") {
        setSave(save * parseFloat(target));
      }
    } else {
      setSave(parseFloat(target));
    }
      setTarget("0");
      setOperator("x");
      return;
    }
    // Validation Operation 
    if (value === "=") {
      if (!operator) return;
      if (operator === "+") {
        setTarget((save + parseFloat(target)).toString());
      } else if (operator === "-") {
        setTarget((save - parseFloat(target)).toString());
      } else if (operator === "÷") {
        setTarget((save / parseFloat(target)).toString());
      } else if (operator === "x") {
        setTarget((save * parseFloat(target)).toString());
      }

      
      setSave(null);
      setOperator(null);
      return;
    };

    setTarget(parseFloat(num + value).toString());
  
  };
  // building the calculator structure
  return (
    <div className="Calculator">
      <img src={logo} alt="logo"/>
      <h1>CALCULATOR</h1>
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
    </div>
  );
};

export default Calculator;
