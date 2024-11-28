import React from "react";

function Incrementer({ onIncrement }) {
    return (
        <button onClick={onIncrement}>
            Увеличить счётчик
        </button>
    );
}

export default Incrementer;