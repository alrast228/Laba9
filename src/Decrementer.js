import React from "react";

function Decrementer({ onDecrement }) {
    return (
        <button onClick={onDecrement}>
            Уменьшить счётчик
        </button>
    );
}

export default Decrementer;