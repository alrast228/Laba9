import React from "react";

function TemperatureConverter({ celsius, fahrenheit, onCelsiusChange, onFahrenheitChange }) {
    const handleCelsiusInput = (e) => {
        onCelsiusChange(e.target.value ? parseFloat(e.target.value) : 0);
    };

    const handleFahrenheitInput = (e) => {
        onFahrenheitChange(e.target.value ? parseFloat(e.target.value) : 0);
    };

    return (
        <div>
            <label>Температура в Цельсиях: </label>
            <input
                type="number"
                value={celsius}
                onChange={handleCelsiusInput}
            />
            <br />
            <label>Температура в Фаренгейтах: </label>
            <input
                type="number"
                value={fahrenheit}
                onChange={handleFahrenheitInput}
            />
        </div>
    );
}

export default TemperatureConverter;