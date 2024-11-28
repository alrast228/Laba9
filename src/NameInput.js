import React from "react";

function NameInput({ firstName, onFirstNameChange }) {
    return (
        <div>
            <label>Имя: </label>
            <input 
                type="text" 
                value={firstName} 
                onChange={onFirstNameChange} 
                placeholder="Введите имя" 
            />
        </div>
    );
}

export default NameInput;