import React from 'react';

import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
// building the calculator structure
    return <div className = "Calculator">
        <h1>23PEOPLE CALCULATOR</h1>
        <div className = "display">0</div>
        <div className = "buttons">
            <Button value="AC" />
            <Button value="±" />
            <Button value="%" />
            <Button value="/" />
            <Button value="7" />
            <Button value="8" />
            <Button value="9" />
            <Button value="x" />
            <Button value="4" />
            <Button value="5" />
            <Button value="6" />
            <Button value="-" />
            <Button value="1" />
            <Button value="2" />
            <Button value="3" />
            <Button value="+" />
            <Button value="3" />
            <Button value="0" />
            <Button value="," />
            <Button value="=" />


            

        </div>
        <div className = "buttom">-</div>
    </div>;
};

export default Calculator;