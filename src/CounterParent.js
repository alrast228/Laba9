import React, { useState } from "react";
import Incrementer from './Incrementer';
import Decrementer from './Decrementer';

function CounterParent() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h3>Общий счётчик: {count}</h3>
            <Incrementer onIncrement={increment} />
            <Decrementer onDecrement={decrement} />
        </div>
    );
}

export default CounterParent;