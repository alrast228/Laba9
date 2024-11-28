import React, { useState } from "react";
import NumberInput from './NumberInput';

function SumApp() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const handleNumberChange = (num1, num2) => {
        setNum1(num1);
        setNum2(num2);
    };

    return (
        <div>
            <h3>Сумма чисел</h3>

            <NumberInput onNumberChange={handleNumberChange} />
            <h4>Сумма: {num1 + num2}</h4>
        </div>
    );
}

export default SumApp;