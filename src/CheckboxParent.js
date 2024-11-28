import React, { useState } from "react";
import CheckboxList from './CheckboxList';

function CheckboxParent() {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false
    });
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setSelectedCheckboxes({
            ...selectedCheckboxes,
            [name]: checked
        });
    };

    const isAnySelected = Object.values(selectedCheckboxes).includes(true);

    return (
        <div>
            <CheckboxList 
                selectedCheckboxes={selectedCheckboxes}
                onCheckboxChange={handleCheckboxChange} 
            />
            
            {isAnySelected && <p>Выбрано</p>}
        </div>
    );
}

export default CheckboxParent;