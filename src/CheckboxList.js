import React from "react";

function CheckboxList({ selectedCheckboxes, onCheckboxChange }) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="checkbox1"
                    checked={selectedCheckboxes.checkbox1}
                    onChange={onCheckboxChange}
                />
                Чекбокс 1
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="checkbox2"
                    checked={selectedCheckboxes.checkbox2}
                    onChange={onCheckboxChange}
                />
                Чекбокс 2
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    name="checkbox3"
                    checked={selectedCheckboxes.checkbox3}
                    onChange={onCheckboxChange}
                />
                Чекбокс 3
            </label>
        </div>
    );
}

export default CheckboxList;