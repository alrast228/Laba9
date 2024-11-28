import React from "react";

function ToggleButton({ onToggle }) {
    return (
        <button onClick={onToggle}>
            Переключить видимость
        </button>
    );
}

export default ToggleButton;