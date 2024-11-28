import React from "react";

function ColorPicker({ onChange }) {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="#ff0000">Цвет1</option>
            <option value="#00ff00">Цвет2</option>
            <option value="#0000ff">Цвет3</option>
        </select>
    );
}

export default ColorPicker;