import React from "react";

function FormInput({ formData, onInputChange }) {
    return (
        <form>
            <div>
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Электронная почта:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                />
            </div>
        </form>
    );
}

export default FormInput;