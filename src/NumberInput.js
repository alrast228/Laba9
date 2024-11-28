import React, { useState } from "react";

function NumberInput({ onNumberChange }) {
    const [inputNum1, setInputNum1] = useState(0);
    const [inputNum2, setInputNum2] = useState(0);

    const handleInputChangeNum1 = (e) => {
        setInputNum1(Number(e.target.value));
        onNumberChange(Number(e.target.value), inputNum2); 
    };

    const handleInputChangeNum2 = (e) => {
        setInputNum2(Number(e.target.value));
        onNumberChange(inputNum1, Number(e.target.value)); 
    };

    return (
        <div>
            <label>Число 1: </label>
            <input 
                type="number" 
                value={inputNum1} 
                onChange={handleInputChangeNum1} 
            />
            <br />
            <label>Число 2: </label>
            <input 
                type="number" 
                value={inputNum2} 
                onChange={handleInputChangeNum2} 
            />
        </div>
    );
}

export default NumberInput;