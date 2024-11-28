import React, { useState } from "react";

function RadioButtonGroup({ onOptionChange }) {
    const [selected, setSelected] = useState("");

    const handleChange = (e) => {
        setSelected(e.target.value);
        onOptionChange(e.target.value);
    };

    return (
        <div>
            <label>
                <input 
                    type="radio" 
                    value="Мне" 
                    checked={selected === "Мне"} 
                    onChange={handleChange} 
                />
                Мне
            </label>
            <br />
            <label>
                <input 
                    type="radio" 
                    value="Очень" 
                    checked={selected === "Очень"} 
                    onChange={handleChange} 
                />
                Очень
            </label>
            <br />
            <label>
                <input 
                    type="radio" 
                    value="Грустно" 
                    checked={selected === "Грустно"} 
                    onChange={handleChange} 
                />
                Грустно
            </label>
        </div>
    );
}

export default RadioButtonGroup;