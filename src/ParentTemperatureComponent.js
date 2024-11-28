import React, { useState } from "react";
import TemperatureConverter from "./TemperatureConverter";

function ParentTemperatureComponent() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        setFahrenheit((value * 9) / 5 + 32); 
    };

    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        setCelsius(((value - 32) * 5) / 9);  
    };

    return (
        <div>
            <h3>Конвертер температур</h3>
            <TemperatureConverter
                celsius={celsius}
                fahrenheit={fahrenheit}
                onCelsiusChange={handleCelsiusChange}
                onFahrenheitChange={handleFahrenheitChange}
            />
        </div>
    );
}

export default ParentTemperatureComponent;