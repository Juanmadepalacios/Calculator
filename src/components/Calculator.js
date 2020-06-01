import React, { useState } from "react";

import logo from "../logo/logo.png";
import Button from "./Button";
import "./Calculator.css";

//useState target button
const Calculator = () => {
  const [target, setTarget] = useState("0");
  //useState save button
  const [save, setSave] = useState(null);
  //useState operator button
  const [operator, setOperator] = useState(null);
  //Function capture keys
  const targetKey = (value) => () => {
    const num = parseFloat(target);
    //AC functionality
    if (value === "C") {
      setTarget("0");
      setSave(null);
      setOperator(null);
      return;
    }
    //± functionality
    if (value === "±") {
      setTarget((num *(-1)).toString());
      return;
    }
    //% functionality
    if (value === "%") {
      setTarget((num / 100).toString());
      setSave(null);
      setOperator(null);
      return;
    }
    //. functionality
    if (value === ".") {
      if (target.includes(".")) return;

      setTarget(target + ".");
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
    }

    if (target[target.length - 1] === ".") {
      setTarget(target + value);
    } else {
      setTarget(parseFloat(num + value).toString());
    }
  };
  // building the calculator structure
  return (
    <div className="Calculator">
      <img src={logo} alt="logo" />
      <h1>CALCULATOR</h1>
      <div className="display">{target}</div>
      <div className="buttons">
        <Button onClickButton={targetKey} value="C" type="function" />
        <Button onClickButton={targetKey} value="±" type="function" />
        <Button onClickButton={targetKey} value="%" type="function" />
        <Button onClickButton={targetKey} value="÷" type="operator" />
        <Button onClickButton={targetKey} value="7" />
        <Button onClickButton={targetKey} value="8" />
        <Button onClickButton={targetKey} value="9" />
        <Button onClickButton={targetKey} value="x" type="operator" />
        <Button onClickButton={targetKey} value="4" />
        <Button onClickButton={targetKey} value="5" />
        <Button onClickButton={targetKey} value="6" />
        <Button onClickButton={targetKey} value="-" type="operator" />
        <Button onClickButton={targetKey} value="1" />
        <Button onClickButton={targetKey} value="2" />
        <Button onClickButton={targetKey} value="3" />
        <Button onClickButton={targetKey} value="+" type="operator" />
        <Button onClickButton={targetKey} value="0" />
        <Button onClickButton={targetKey} value="." />
        <Button onClickButton={targetKey} value="=" type="operator" />
      </div>
    </div>
  );
};

export default Calculator;
