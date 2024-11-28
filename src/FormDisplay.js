import React from "react";

function FormDisplay({ formData }) {
    return (
        <div>
            <h3>Данные формы:</h3>
            <p><strong>Имя:</strong> {formData.name}</p>
            <p><strong>Электронная почта:</strong> {formData.email}</p>
        </div>
    );
}

export default FormDisplay;