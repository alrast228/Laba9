import React, { useState } from "react";
import RadioButtonGroup from "./RadioButtonGroup";

function ParentComponent() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <h3>Выберите вариант</h3>
            <RadioButtonGroup onOptionChange={handleOptionChange} />
            <h4>Выбранный вариант: {selectedOption}</h4>
        </div>
    );
}

export default ParentComponent;